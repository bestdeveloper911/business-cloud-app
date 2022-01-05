import React from 'react';
import {observable, action, reaction} from "mobx";
import Toast from 'react-native-toast-message';
import {
    getProfile, updateProfile, markAsReadMsg,
    createCloudProducts, createCloudServices, getCloudAdvisors, getCloudPrograms, createSubscriptionTemplate,
    getTeams, getStorages, getMentors, createSubscriptionProduct, createSubscriptionService, createCustomer
} from "../lib/apis";
import {_retrieveData} from "../utils";

class SalesforceStore {
    @observable isLoggedIn = false;
    @observable email = '';
    @observable cloudProducts = []; // cloud products
    @observable cloudServices = []; // cloud services
    @observable cloudAdvisors = []; // cloud services
    @observable cloudPrograms = []; // cloudPrograms
    @observable teams = []; // teams
    @observable storages = []; // storages
    @observable mentors = []; // mentors

    @observable accountId = '';
    @observable name = '';
    @observable brand = '';
    @observable last4 = '';
    @observable exp_month = '';
    @observable exp_year = '';
    @observable recordType = '';
    @observable businessName = '';
    @observable businessType = '';
    @observable q1Data = '';
    @observable q2Data = '';
    @observable q3Data = '';
    @observable nextYearEnd = '';
    @observable fiscalYearEnd = '';
    @observable phone = '';
    @observable website = '';
    @observable totalPoints = '';
    @observable salesTaxFrequency = '';
    @observable monthlyTransactions = '';
    @observable billingStreet = '';
    @observable billingCity = '';
    @observable billingState = '';
    @observable billingPostalCode = '';
    @observable billingCountry = '';
    vModeHandle = null;

    constructor(snackbar, authStore, viewModeStore) {
        this.snackbar = snackbar;
        this.isLoggedIn = authStore.isLoggedIn;
        this.email = authStore.email;
        this.vModeHandle = viewModeStore;

        reaction(
            () => ({
                isLoggedIn: authStore.isLoggedIn,
                email: authStore.email
            }),
            authObj => {
                this.isLoggedIn = authObj.isLoggedIn;
                this.email = authObj.email;
                if (this.isLoggedIn) {
                    this.requestProfile();
                    this.requestCloudAdvisors();
                    this.requestCloudPrograms();
                    this.requestTeams();
                    this.requestStorages();
                    this.requestMentors();
                }
            }
        );

        if (this.isLoggedIn) {
            this.requestProfile();
            this.requestCloudAdvisors();
            this.requestCloudPrograms();
            this.requestTeams();
            this.requestStorages();
            this.requestMentors();
        }
    }

    @action.bound async requestProfile() {
        if (!this.email) return;
        this.vModeHandle.setLoadingMode(true);
        const authToken = await _retrieveData('authToken');
        getProfile(authToken, this.email)
            .then(ret => {
                if (ret.data) {
                    this.accountId = ret.data[0].accountId || '';
                    this.businessName = ret.data[0].businessName || '';
                    this.businessType = ret.data[0].businessType || '';
                    this.q1Data = ret.data[0].q1Data || '';
                    this.q2Data = ret.data[0].q2Data || '';
                    this.q3Data = ret.data[0].q3Data || '';
                    this.nextYearEnd = ret.data[0].nextYearEnd || '';
                    this.fiscalYearEnd = ret.data[0].fiscalYearEnd || '';
                    this.phone = ret.data[0].phone || '';
                    this.website = ret.data[0].website || '';
                    this.totalPoints = ret.data[0].totalPoints || '';
                    this.salesTaxFrequency = ret.data[0].salesTaxFrequency || '';
                    this.monthlyTransactions = ret.data[0].monthlyTransactions || '';
                    this.recordType = ret.data[0].recordType || '';
                    this.billingStreet = ret.data[0].billingStreet || '';
                    this.billingCity = ret.data[0].billingCity || '';
                    this.billingState = ret.data[0].billingState || '';
                    this.billingPostalCode = ret.data[0].billingPostalCode || '';
                    this.billingCountry = ret.data[0].billingCountry || '';
                    this.name = ret.data[0].name || '';
                    this.brand = ret.data[0].brand || '';
                    this.last4 = ret.data[0].last4 || '';
                    this.exp_month = ret.data[0].exp_month || '';
                    this.exp_year = ret.data[0].exp_year || '';
                }
                this.vModeHandle.setLoadingMode(false);
            })
            .catch(() => {
                this.vModeHandle.setLoadingMode(false);
            })
    }

    @action.bound updateBusinessName(businessName) {
        if ((businessName || '').trim().length === 0) return;
        this.businessName = businessName || '';
    }

    @action.bound updateBusinessType(businessType) {
        if ((businessType || '').trim().length === 0) return;
        this.businessType = businessType || '';
    }

    @action.bound updateFiscalYearEnd(fiscalYearEnd) {
        if ((fiscalYearEnd || '').trim().length === 0) return;
        this.fiscalYearEnd = fiscalYearEnd || '';
    }

    @action.bound updateGoogleDriveLink(googleDriveLink) {
        if ((googleDriveLink || '').trim().length === 0) return;
        this.googleDriveLink = googleDriveLink || '';
    }

    @action.bound updateReceiptBankEmail(receiptBankEmail) {
        if ((receiptBankEmail || '').trim().length === 0) return;
        this.receiptBankEmail = receiptBankEmail || '';
    }

    @action.bound updateName(name) {
        if ((name || '').trim().length === 0) return;
        this.name = name || '';
    }

    // ================================================================
    @action.bound updateBillingStreet(billingStreet) {
        if ((billingStreet || '').trim().length === 0) return;
        this.billingStreet = billingStreet || '';
    }

    @action.bound updateBillingCity(billingCity) {
        if ((billingCity || '').trim().length === 0) return;
        this.billingCity = billingCity || '';
    }

    @action.bound updateBillingState(billingState) {
        if ((billingState || '').trim().length === 0) return;
        this.billingState = billingState || '';
    }

    @action.bound updateBillingPostalCode(billingPostalCode) {
        if ((billingPostalCode || '').trim().length === 0) return;
        this.billingPostalCode = billingPostalCode || '';
    }

    @action.bound updateBillingCountry(billingCountry) {
        if ((billingCountry || '').trim().length === 0) return;
        this.billingCountry = billingCountry || '';
    }

    // ================================================================
    @action.bound updateSalesTaxFrequency(salesTaxFrequency) {
        if ((salesTaxFrequency || '').trim().length === 0) return;
        this.salesTaxFrequency = salesTaxFrequency || '';
    }

    @action.bound updateMonthlyTransactions(monthlyTransactions) {
        if ((monthlyTransactions || '').trim().length === 0) return;
        this.monthlyTransactions = monthlyTransactions || '';
    }

    @action.bound updatePhone(phone) {
        if ((phone || '').trim().length === 0) return;
        this.phone = phone || '';
    }

    @action.bound updateWebsite(website) {
        if ((website || '').trim().length === 0) return;
        this.website = website || '';
    }

    @action.bound async updateProfile() {
        const obj = {
            "email": this.email,
            "businessName": this.businessName,
            "businessType": this.businessType,
            "fiscalYearEnd": this.fiscalYearEnd,
            "googleDriveLink": this.googleDriveLink,
            "receiptBankEmail": this.receiptBankEmail,
            "name": this.name,
            "salesTaxFrequency": this.salesTaxFrequency,
            "monthlyTransactions": this.monthlyTransactions,
            "phone": this.phone,
            "website": this.website,
            "billingStreet": this.billingStreet,
            "billingCity": this.billingCity,
            "billingState": this.billingState,
            "billingPostalCode": this.billingPostalCode,
            "billingCountry": this.billingCountry,
        };
        this.vModeHandle.setLoadingMode(true);
        const authToken = await _retrieveData('authToken');
        updateProfile(authToken, obj)
            .then(ret => {
                // console.log('', ret);
                this.showSnackMsg(ret.message);
                this.vModeHandle.setLoadingMode(false);
            })
            .catch(() => {
                this.vModeHandle.setLoadingMode(false);
            });
    }

    @action.bound createNewCMP(cloudProduct, status, startDate, paymentDate, price, users, currency) {
        return new Promise(async resolve => {
            this.vModeHandle.setLoadingMode(true);
            const authToken = await _retrieveData('authToken');
            createCloudProducts(authToken, {
                accountId: this.accountId,
                productId: cloudProduct,
                currency,
                status,
                start_date: startDate,
                price,
                salesperson: '',
                payment_start_date: paymentDate,
            })
                .then(ret => {
                    // console.log('', ret);
                    this.showSnackMsg(ret.message);
                    this.vModeHandle.setLoadingMode(false);
                    resolve(true);
                })
                .catch(() => {
                    this.vModeHandle.setLoadingMode(false);
                    resolve(false);
                })
        });
    }

    @action.bound createNewCMS(
        cloudService, currency, status, expiryDate, description, related_year, retail_price,
        payment_start_date, pricing_type, partner_price, client_price
    ) {
        return new Promise(async resolve => {
            this.vModeHandle.setLoadingMode(true);
            const authToken = await _retrieveData('authToken');
            createCloudServices(authToken, {
                accountId: this.accountId,
                serviceId: cloudService,
                currency: currency,
                status: status,
                expiry_date: expiryDate,
                salesperson: "",
                description: description,
                related_year: related_year,
                retail_price: retail_price,
                payment_start_date: payment_start_date,
                pricing_type: pricing_type,
                partner_price: partner_price,
                client_price: client_price,
                service_provider: ""
            })
                .then(ret => {
                    // console.log('', ret);
                    this.showSnackMsg(ret.message);
                    this.vModeHandle.setLoadingMode(false);
                    resolve(true);
                })
                .catch(() => {
                    this.vModeHandle.setLoadingMode(false);
                    resolve(false);
                })
        });
    }

    @action.bound async requestCloudAdvisors() {
        this.vModeHandle.setLoadingMode(true);
        const authToken = await _retrieveData('authToken');
        getCloudAdvisors(authToken)
            .then(ret => {
                if (ret.data) {
                    this.cloudAdvisors = ret.data || [];
                    this.vModeHandle.setLoadingMode(false);
                }
            })
            .catch(() => {
                this.cloudAdvisors = [];
                this.vModeHandle.setLoadingMode(false);
            })
    }

    @action.bound async requestCloudPrograms() {
        this.vModeHandle.setLoadingMode(true);
        const authToken = await _retrieveData('authToken');
        getCloudPrograms(authToken)
            .then(ret => {
                if (ret.data) {
                    this.cloudPrograms = ret.data || [];
                    this.vModeHandle.setLoadingMode(false);
                }
            })
            .catch(() => {
                this.cloudPrograms = [];
                this.vModeHandle.setLoadingMode(false);
            })
    }

    @action.bound async requestTeams() {
        this.vModeHandle.setLoadingMode(true);
        const authToken = await _retrieveData('authToken');
        getTeams(authToken, this.email)
            .then(ret => {
                if (ret.data) {
                    this.teams = ret.data || [];
                }
                this.vModeHandle.setLoadingMode(false);
            })
            .catch(() => {
                this.teams = [];
                this.vModeHandle.setLoadingMode(false);
            })
    }

    @action.bound async requestStorages() {
        this.vModeHandle.setLoadingMode(true);
        const authToken = await _retrieveData('authToken');
        getStorages(authToken, this.email)
            .then(ret => {
                if (ret.data) {
                    this.storages = ret.data || [];
                }
                this.vModeHandle.setLoadingMode(false);
            })
            .catch(() => {
                this.storages = [];
                this.vModeHandle.setLoadingMode(false);
            })
    }

    @action.bound async requestMentors() {
        this.vModeHandle.setLoadingMode(true);
        const authToken = await _retrieveData('authToken');
        getMentors(authToken,   this.email)
            .then(ret => {
                if (ret.data) {
                    this.mentors = ret.data || [];
                    this.vModeHandle.setLoadingMode(false);
                }
            })
            .catch(() => {
                this.mentors = [];
                this.vModeHandle.setLoadingMode(false);
            })
    }

    @action.bound markAsReadMsg(Id, isRead) {
        this.vModeHandle.setLoadingMode(true);
        return new Promise(async resolve => {
            const authToken = await _retrieveData('authToken');
            markAsReadMsg(authToken, {Id: Id, mode: isRead})
                .then(() => {
                    this.vModeHandle.setLoadingMode(false);
                    resolve(true);
                })
                .catch(e => {
                    this.vModeHandle.setLoadingMode(false);
                    resolve(false);
                })
        });
    }

    @action.bound createSubscriptionProduct(productId) {
        this.vModeHandle.setLoadingMode(true);
        return new Promise(async(resolve, reject) => {
            const authToken = await _retrieveData('authToken');
            createSubscriptionProduct(authToken, {
                productId, accountId: this.accountId, email: this.email,
            })
                .then((data) => {
                    this.showSnackMsg(data.message || '');
                    this.vModeHandle.setLoadingMode(false);
                    resolve(true);
                })
                .catch((err) => {
                    this.showSnackMsg(err.message || '');
                    this.vModeHandle.setLoadingMode(false);
                    reject(false);
                })
        });
    }

    @action.bound createSubscriptionService(serviceId) {
        this.vModeHandle.setLoadingMode(true);
        return new Promise(async(resolve, reject) => {
            const authToken = await _retrieveData('authToken');
            createSubscriptionService(authToken, {
                serviceId, accountId: this.accountId, email: this.email,
            })
                .then((data) => {
                    this.showSnackMsg(data.message || '');
                    this.vModeHandle.setLoadingMode(false);
                    resolve(true);
                })
                .catch((err) => {
                    this.showSnackMsg(err.message || '');
                    this.vModeHandle.setLoadingMode(false);
                    reject(false);
                })
        });
    }

    @action.bound createSubscriptionTemplate(templateId) {
        this.vModeHandle.setLoadingMode(true);
        return new Promise(async (resolve, reject) => {
            const authToken = await _retrieveData('authToken');
            createSubscriptionTemplate(authToken, {
                templateId, accountId: this.accountId, email: this.email,
            })
                .then((data) => {
                    this.showSnackMsg(data.message || '');
                    this.vModeHandle.setLoadingMode(false);
                    resolve(true);
                })
                .catch((err) => {
                    this.showSnackMsg(err.message || '');
                    this.vModeHandle.setLoadingMode(false);
                    reject(false);
                })
        });
    }

    @action.bound createCustomer(paymentId, last4, brand, exp_month, exp_year) {
        this.vModeHandle.setLoadingMode(true);
        return new Promise(async resolve => {
            const authToken = await _retrieveData('authToken');
            createCustomer(authToken, {
                paymentId, accountId: this.accountId, email: this.email, last4, brand, exp_month, exp_year, isToken: true,
            })
                .then((data) => {
                    this.vModeHandle.setLoadingMode(false);
                    this.showSnackMsg(data.message || '');
                    this.requestProfile();
                    resolve(true);
                })
                .catch((err) => {
                    this.vModeHandle.setLoadingMode(false);
                    this.showSnackMsg(err.message || '');
                    resolve(false);
                })
        });
    }

    /**
     *  Snackbar Popup message
     */
    @action.bound showSnackMsg(msg) {
        this.snackbar(
            Toast.show({
              position: 'bottom',
              text1: msg,
              bottomOffset: 10,
              })
          );
    }
}

export default (snackbar, authStore, viewModeStore) => new SalesforceStore(snackbar, authStore, viewModeStore);
