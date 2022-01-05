import {observable, action, reaction} from 'mobx';
import Toast from 'react-native-toast-message';
import {
    getNotifications
} from "../lib/apis";
import React from "react";
import {_retrieveData, _storeData} from "../utils";

class NotificationStore {
    @observable isLoggedIn = false;
    @observable email = '';
    @observable notifications = []; // notifications
    @observable isNewMsg = false;
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
                    this.requestNotifications();
                }
            }
        );

        if (this.isLoggedIn) {
            this.requestNotifications();
        }
    }

    @action.bound readNotifyMsg() {
        this.isNewMsg = false;
    }

    @action.bound async requestNotifications() {
        this.vModeHandle.setLoadingMode(true);
        const authToken = await _retrieveData('authToken');
        return new Promise(resolve => {
            getNotifications(authToken, this.email)
                .then(async ret => {
                    if (ret.data) {
                        const data = ret.data || [];
                        data.sort(function (a, b) {
                            const aRelease = Date.parse(a.Msg_Date__c || '');
                            const bRelease = Date.parse(b.Msg_Date__c || '');
                            return aRelease < bRelease ? 1 : -1;
                        });
                        this.notifications = data;

                        const sizeOfMsgs = await _retrieveData('notification');
                        if (Number(sizeOfMsgs) !== Number(data.length)) {
                            this.isNewMsg = true;
                            await _storeData('notification', data.length);
                        }
                    }
                    this.vModeHandle.setLoadingMode(false);
                    resolve(true);
                })
                .catch(e => {
                    this.vModeHandle.setLoadingMode(false);
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

export default (snackbar, authStore, viewModeStore) => new NotificationStore(snackbar, authStore, viewModeStore);
