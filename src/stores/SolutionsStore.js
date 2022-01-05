import {observable, action, reaction} from 'mobx';
import {
    getCloudProducts, getCloudServices, getXeroTemplates
} from "../lib/apis";
import {_retrieveData} from "../utils";

class SolutionsStore {
    @observable email = '';
    @observable cloudProducts = []; // cloud products
    @observable cloudSpecialProducts = []; // cloud special products

    @observable cloudServices = []; // cloud services
    @observable cloudSpecialServices = []; // cloud special services

    @observable xeroTemplates = []; // xero templates

    @observable countOfProducts = 0;
    @observable countOfServices = 0;
    @observable countOfTemplates = 0;
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
                    this.requestCloudProducts();
                    this.requestCloudServices();
                    this.requestXeroTemplates();
                }
            }
        );

        if (this.isLoggedIn) {
            this.requestCloudProducts();
            this.requestCloudServices();
            this.requestXeroTemplates();
        }
    }

    @action.bound async requestCloudProducts() {    // Cloud Products
        if (!this.email) return;
        this.vModeHandle.setLoadingMode(true);
        const authToken = await _retrieveData('authToken');
        getCloudProducts(authToken, this.email)
            .then(ret => {
                // console.log('[Cloud Products]', ret);
                if (ret.data) {
                    const cloudProducts = ret.data || [];
                    cloudProducts.sort((a, b) => (a.Display_order__c > b.Display_order__c) ? 1 : -1);

                    let spProducts = [];
                    cloudProducts.map((item) => {
                        if (item && item.Special_Offer_order__c) {
                            spProducts.push(item);
                        }
                    });
                    spProducts.sort((a, b) => (a.Special_Offer_order__c > b.Special_Offer_order__c) ? 1 : -1);

                    this.cloudProducts = cloudProducts;
                    this.countOfProducts = cloudProducts.length;
                    this.cloudSpecialProducts = spProducts;
                }
                this.vModeHandle.setLoadingMode(false);
            })
            .catch(() => {
                this.vModeHandle.setLoadingMode(false);
            });
    }

    @action.bound async requestCloudServices() {    // Cloud Services
        if (!this.email) return;
        this.vModeHandle.setLoadingMode(true);
        const authToken = await _retrieveData('authToken');
        getCloudServices(authToken, this.email)
            .then(ret => {
                // console.log('[Cloud Services]', ret);
                if (ret.data) {
                    const cloudServices = ret.data || [];
                    cloudServices.sort((a, b) => (a.Display_order__c > b.Display_order__c) ? 1 : -1);

                    let spServices = [];
                    cloudServices.map((item) => {
                        if (item && item.Special_Offer_Order__c) {
                            spServices.push(item);
                        }
                    });
                    spServices.sort((a, b) => (a.Special_Offer_Order__c > b.Special_Offer_Order__c) ? 1 : -1);

                    this.cloudServices = cloudServices;
                    this.countOfServices = cloudServices.length;
                    this.cloudSpecialServices = spServices;
                }
                this.vModeHandle.setLoadingMode(false);
            })
            .catch(() => {
                this.vModeHandle.setLoadingMode(false);
            });
    }

    @action.bound async requestXeroTemplates() {
        this.vModeHandle.setLoadingMode(true);
        const authToken = await _retrieveData('authToken');
        getXeroTemplates(authToken)
            .then(ret => {
                if (ret.data) {
                    this.xeroTemplates = ret.data || [];
                    this.countOfTemplates = this.xeroTemplates.length;
                }
                this.vModeHandle.setLoadingMode(false);
            })
            .catch(() => {
                this.xeroTemplates = [];
                this.vModeHandle.setLoadingMode(false);
            })
    }
}

export default (snackbar, authStore, viewModeStore) => new SolutionsStore(snackbar, authStore, viewModeStore);
