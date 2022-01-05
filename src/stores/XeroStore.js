import {observable, action, reaction} from 'mobx';
import moment from 'moment';
import {
    getConsentUrl, setXeCallback, getXeroInvoices, getExecutiveSummary, getXeroAccounts, getXeroBankTransactions
} from "../lib/apis";
import {_retrieveData} from "../utils";

class XeroStore {
    @observable consentUrl = '';
    @observable xeroOrgs = [];
    @observable xeroInvoices = [];
    @observable xeroReports = [];
    @observable xeroAccounts = [];
    @observable xeroBankTxs = [];
    @observable oldestUnreconcDate = '';
    @observable isXeroLogged = false;
    @observable shareLoanMonth = '';
    @observable shareLoanYDT = '';
    @observable salesTaxMonth = '';
    @observable salesTaxYDT = '';
    vModeHandle = null;

    constructor(snackbar, authStore, viewModeStore) {
        this.snackbar = snackbar;
        this.isLoggedIn = authStore.isLoggedIn;
        this.vModeHandle = viewModeStore;

        reaction(
            () => ({
                isLoggedIn: authStore.isLoggedIn,
            }),
            authObj => {
                this.isLoggedIn = authObj.isLoggedIn;
                if (this.isLoggedIn) {
                    this.getXeroLoginUrl();
                }
            }
        );

        if (this.isLoggedIn) {
            this.getXeroLoginUrl();
            this.getXeExecutiveSummary(); // test
            this.getXeAccounts(); // test
            this.getXeBankTransactions(); // test
        }
    }

    @action.bound async getXeroLoginUrl() {
        const authToken = await _retrieveData('authToken');
        getConsentUrl(authToken)
            .then(data => {
                this.consentUrl = data.url;
            })
            .catch(() => {
            });
    }

    @action.bound async setXeroCallback(code, scope, session_state) {
        const authToken = await _retrieveData('authToken');
        setXeCallback(authToken, {code, scope, session_state})
            .then(ret => {
                try {
                    this.xeroOrgs = ret.data || [];
                } catch (e) {
                    this.xeroOrgs = [];
                }
            });
        this.getXeBankTransactions();
        this.getXeExecutiveSummary();
        this.isXeroLogged = true;
    }

    @action.bound async getXeInvoices() {
        const authToken = await _retrieveData('authToken');
        getXeroInvoices(authToken)
            .then(data => {
                this.xeroInvoices = data.Invoices || [];
            });
    }

    @action.bound async getXeExecutiveSummary() {
        const authToken = await _retrieveData('authToken');
        getExecutiveSummary(authToken)
            .then(data => {
                // this.xeroReports = data.Reports || [];
                const xeroReportsData = data.Reports || [];
                const Rows = (xeroReportsData[0] || {}).Rows || [];
                Rows.map((item) => {
                    if (item.RowType === "Section" && item.Title === "Profitability") {
                        (item.Rows || []).map((data) => {
                            const Cells = data.Cells || [];
                            if ((Cells[0] || {}).Value === "Income") {
                                this.shareLoanMonth = (Cells[1] || {}).Value;
                                this.shareLoanYDT = (Cells[2] || {}).Value;
                            } else if (Cells[0].Value === "Profit (loss)") {
                                this.salesTaxMonth = (Cells[1] || {}).Value;
                                this.salesTaxYDT = (Cells[2] || {}).Value;
                            }
                        });
                    }
                });
            });
    }

    @action.bound async getXeAccounts() {
        const authToken = await _retrieveData('authToken');
        getXeroAccounts(authToken)
            .then(data => {
                this.xeroAccounts = data.Accounts || [];
            });
    }

    @action.bound async getXeBankTransactions() {
        const authToken = await _retrieveData('authToken');
        getXeroBankTransactions(authToken)
            .then(data => {
                // this.xeroBankTxs = data.BankTransactions || [];
                const xeroBankTxsData = data.BankTransactions || [];
                xeroBankTxsData.sort((a, b) => {
                    const aRelease = Date.parse(a.DateString || '');
                    const bRelease = Date.parse(b.DateString || '');
                    return aRelease < bRelease;
                });
                this.oldestUnreconcDate = '';
                for (let i = 0; i < xeroBankTxsData.length; i++) {
                    if (!xeroBankTxsData[i].IsReconciled && xeroBankTxsData[i].Status !== 'DELETED') {
                        this.oldestUnreconcDate = moment(xeroBankTxsData[i].DateString).format('MMM D, YYYY')
                        this.isXeroLogged = true;
                        break;
                    }
                }
            });
    }
}

export default (snackbar, authStore, viewModeStore) => new XeroStore(snackbar, authStore, viewModeStore);
