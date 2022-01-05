import React from "react";
import {observable, action, reaction} from 'mobx';
import Toast from 'react-native-toast-message';
import {
    getProducts, getServices, getMyTemplates, getProfile, cancelSubscriptionProduct, cancelSubscriptionService
} from "../lib/apis";
import {_retrieveData} from "../utils";

class MySolutionsStore {
    @observable email = '';
    @observable products = []; // my products
    @observable services = []; // my services
    @observable myTemplates = []; // xero templates

    @observable onboarding_avatar = '';
    @observable onboarding_Company = '';
    @observable onboarding_email = '';
    @observable onboarding_calendly = '';
    @observable bookkeeping_avatar = '';
    @observable bookkeeper_Company = '';
    @observable bookkeeper_Email = '';
    @observable bookkeeper_Calendly = '';
    @observable accounting_avatar = '';
    @observable accountant_Name = '';
    @observable accountant_email = '';
    @observable accounting_calendly = '';
    @observable legal_avatar = '';
    @observable incorporation_Name = '';
    @observable incorporation_email = '';
    @observable incorporation_calendly = '';
    @observable targetOverallProgress = '';
    @observable taskActivityScore = '';
    @observable googleDriveLink = '';
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
                    this.requestProducts();
                    this.requestServices();
                    this.requestMyTemplates();
                    this.requestProfile();
                }
            }
        );

        if (this.isLoggedIn) {
            this.requestProducts();
            this.requestServices();
            this.requestMyTemplates();
            this.requestProfile();
        }
    }

    @action.bound async requestProducts() {       // This is Cloudmeb Products
        if (!this.email) return;
        this.vModeHandle.setLoadingMode(true);
        const authToken = await _retrieveData('authToken');
        getProducts(authToken, this.email)
            .then(ret => {
                // console.log('[Products]', ret);
                if (ret.data) {
                    this.products = ret.data || [];
                }
                this.vModeHandle.setLoadingMode(false);
            })
            .catch(() => {
                this.products = [];
                this.vModeHandle.setLoadingMode(false);
            });
    }

    @action.bound async requestServices() {       // This is Cloudmeb Services
        if (!this.email) return;
        this.vModeHandle.setLoadingMode(true);
        const authToken = await _retrieveData('authToken');
        getServices(authToken, this.email)
            .then(ret => {
                // console.log('[Services]', ret);
                if (ret.data) {
                    this.services = ret.data || [];
                }
                this.vModeHandle.setLoadingMode(false);
            })
            .catch(() => {
                this.services = [];
                this.vModeHandle.setLoadingMode(false);
            })
    }

    @action.bound async requestMyTemplates() {      // This is My Templates
        this.vModeHandle.setLoadingMode(true);
        const authToken = await _retrieveData('authToken');
        getMyTemplates(authToken, this.email)
            .then(ret => {
                // console.log('[Templates]', ret);
                if (ret.data) {
                    this.myTemplates = ret.data || [];
                }
                this.vModeHandle.setLoadingMode(false);
            })
            .catch(() => {
                this.myTemplates = [];
                this.vModeHandle.setLoadingMode(false);
            });
    }

    @action.bound async requestCancelProduct(productId, subscriptionId) {
        this.vModeHandle.setLoadingMode(true);
        const authToken = await _retrieveData('authToken');
        cancelSubscriptionProduct(authToken, {
            productId: productId,
            subscriptionId: subscriptionId,
        })
            .then(ret => {
                this.showSnackMsg(ret.message);
                this.requestProducts();
                this.vModeHandle.setLoadingMode(false);
            })
            .catch(() => {
                this.vModeHandle.setLoadingMode(false);
            });
    }

    @action.bound async requestCancelService(serviceId, subscriptionId) {
        this.vModeHandle.setLoadingMode(true);
        const authToken = await _retrieveData('authToken');
        cancelSubscriptionService(authToken, {
            serviceId: serviceId,
            subscriptionId: subscriptionId,
        })
            .then(ret => {
                this.showSnackMsg(ret.message);
                this.requestServices();
                this.vModeHandle.setLoadingMode(false);
            })
            .catch(() => {
                this.vModeHandle.setLoadingMode(false);
            })
    }

    @action.bound async requestProfile() {
        if (!this.email) return;
        this.vModeHandle.setLoadingMode(true);
        const authToken = await _retrieveData('authToken');
        getProfile(authToken, this.email)
            .then(ret => {
                if (ret.data) {
                    this.accountId = ret.data[0].accountId || '';
                    this.onboarding_avatar = ret.data[0].onboarding.Partner_Onboarding_avatar__c || '';
                    this.onboarding_Company = ret.data[0].onboarding.Partner_Onboarding_Company__c || '';
                    this.onboarding_email = ret.data[0].onboarding.Partner_Onboarding_email__c || '';
                    this.onboarding_calendly = ret.data[0].onboarding.Partner_onboarding_calendly__c || '';
                    this.bookkeeping_avatar = ret.data[0].bookkeeper.Partner_Bookkeeping_avatar__c || '';
                    this.bookkeeper_Company = ret.data[0].bookkeeper.Partner_Bookkeeper_Company__c || '';
                    this.bookkeeper_Email = ret.data[0].bookkeeper.Partner_Bookkeeper_Email__c || '';
                    this.bookkeeper_Calendly = ret.data[0].bookkeeper.Partner_Bookkeeper_Calendly__c || '';
                    this.accounting_avatar = ret.data[0].accounting.Partner_Accounting_avatar__c || '';
                    this.accountant_Name = ret.data[0].accounting.Partner_Accountant_Name__c || '';
                    this.accountant_email = ret.data[0].accounting.Partner_Accountant_email__c || '';
                    this.accounting_calendly = ret.data[0].accounting.Partner_Accounting_calendly__c || '';
                    this.legal_avatar = ret.data[0].legal.Partner_Legal_avatar__c || '';
                    this.incorporation_Name = ret.data[0].legal.Partner_Incorporation_Name__c || '';
                    this.incorporation_email = ret.data[0].legal.Partner_Incorporation_email__c || '';
                    this.incorporation_calendly = ret.data[0].legal.Partner_incorporation_calendly__c || '';
                    this.targetOverallProgress = ret.data[0].Target_Overall_progress__c || 0;
                    this.taskActivityScore = ret.data[0].Task_Activity_Score__c || 0;
                    this.googleDriveLink = ret.data[0].Google_Drive_Link__c || '';
                }
                this.vModeHandle.setLoadingMode(false);
            })
            .catch(() => {
                this.vModeHandle.setLoadingMode(false);
            })
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

export default (snackbar, authStore, viewModeStore) => new MySolutionsStore(snackbar, authStore, viewModeStore);
