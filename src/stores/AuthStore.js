import React from 'react';
import {observable, action} from 'mobx';
import Toast from 'react-native-toast-message';
import {
  loginWithEmail, loginWithGmail, registerWithEmail, confirmEmail,
  existEmail, resetPasswordRequest, resetPassword, updateUsername, getRegions
} from "../lib/apis";
import { _retrieveData, _storeData, _clear } from "../utils";
import AsyncStorage from '@react-native-community/async-storage';

class AuthStore {
  @observable isLoggedIn = false;
  @observable email = '';
  @observable pendingEmail = '';
  @observable username = '';
  @observable profileName = '';
  @observable regions = [];
  vModeHandle = null;

  constructor(snackbar, viewModeStore) {
    this.initStore();
    this.snackbar = snackbar;
    this.vModeHandle = viewModeStore;
    this.getRegionsData();
  }

  async initStore() {
    const authToken = await _retrieveData('authToken');
    this.isLoggedIn = !!authToken;
    this.email = await _retrieveData('email');
    this.username = await _retrieveData('username');
  }

  /**
   *  Email login, Sign Up
   */
  @action.bound loginWithMail(email, password) {
    this.vModeHandle.setLoadingMode(true);
    return new Promise((resolve, reject) => {
      loginWithEmail(email, password)
        .then(async data => {
          await this.clearStorage();
          this.vModeHandle.setLoadingMode(false);
          this.username = data.name || '';
          this.email = data.email || '';
          await _storeData('authToken', data.jwt || "");
          await _storeData('username', this.username);
          await _storeData('email', this.email);

          this.isLoggedIn = true;
          this.showSnackMsg('You are successfully logged in.');
          resolve(true);
        })
        .catch(e => {
          this.vModeHandle.setLoadingMode(false);
          console.log('[verify failed]', e);
          this.showSnackMsg('Login failed.');
          reject(e?.errors || 'Login is failed');
        });
    });
  }

  @action.bound loginWithGoogle(data) {
    this.vModeHandle.setLoadingMode(true);
    return new Promise((resolve, reject) => {
      loginWithGmail(data)
        .then(async data => {
          this.vModeHandle.setLoadingMode(false);
          this.username = data.name || '';
          this.email = data.email || '';

          await _storeData('authToken', data.jwt || "");
          await _storeData('username', this.username);
          await _storeData('email', this.email);

          this.isLoggedIn = true;
          this.showSnackMsg('You are successfully logged in.');
          resolve(true);
        })
        .catch(e => {
          this.vModeHandle.setLoadingMode(false);
          console.log('[verify failed]', e);
          this.showSnackMsg('Login failed.');
          reject(e);
        });
    });
  }

  @action.bound getRegionsData() {
    getRegions()
      .then(data => {
        const regionsData = [];
        (data.regions || []).map((item, index) => {
          regionsData.push({
            id: item.value,
            name: item.value,
            img: '',
          });
        });
        this.regions = regionsData;
      })
      .catch(e => {
        this.regions = [];
      });
  }

  @action.bound checkExistEmail(email) {
    this.vModeHandle.setLoadingMode(true);
    return new Promise((resolve, reject) => {
      existEmail(email)
        .then(data => {
          this.vModeHandle.setLoadingMode(false);
          if (data.isExist) {
            this.showSnackMsg('Email is existing already.');
            resolve(true);
          } else {
            resolve(false);
          }
        })
        .catch(e => {
          this.vModeHandle.setLoadingMode(false);
          console.log('[checkExistEmail]', e);
          resolve(true);
        });
    });
  }

  @action.bound updateProfileName(name) {
    if ((name || '').trim().length === 0) return;
    this.username = name || '';
  }

  @action.bound async updateProfile() {
    this.vModeHandle.setLoadingMode(true);
    const authToken = await _retrieveData('authToken');
    return new Promise((resolve, reject) => {
      updateUsername(authToken, this.profileName)
        .then(data => {
          this.vModeHandle.setLoadingMode(false);
          if (data.success) {
            this.showSnackMsg('Profile has been updated successfully.');
            resolve(true);
          } else {
            resolve(false);
          }
        })
        .catch(e => {
          this.vModeHandle.setLoadingMode(false);
          console.log('[updateUsername]', e);
          resolve(true);
        });
    });
  }

  @action.bound resetPasswordRequest(email) {
    this.vModeHandle.setLoadingMode(true);
    resetPasswordRequest(email)
      .then(ret => {
        this.vModeHandle.setLoadingMode(false);
        this.showSnackMsg(ret.message);
        setTimeout(() => {
          // Todo: replace location with navigation
          // window.location.href = '/login';
        }, 3000);
      })
      .catch(err => {
        this.vModeHandle.setLoadingMode(false);
        this.showSnackMsg(err.message);
      });
  }

  @action.bound resetPassword(token, password) {
    this.vModeHandle.setLoadingMode(true);
    resetPassword(password, token)
      .then(ret => {
        this.vModeHandle.setLoadingMode(false);
        this.showSnackMsg(ret.message);
        setTimeout(() => {
          // Todo: replace location with navigation
          // window.location.href = '/login';
        }, 3000);
      })
      .catch(err => {
        this.vModeHandle.setLoadingMode(false);
        this.showSnackMsg(err.message);
      });
  }

  @action.bound registerWithMail(
    name, email, password, phone, companyName, businessType, region,
    onboardStatus, monthlyTransactions, salesTaxFreq, fiscalYearEnd, socialMode
  ) {
    const mTrans = [
      "1-50 Transactions",
      "50-100 Transactions",
      "100-250 Transactions",
      "250-500 Transactions",
      "500-1000 Transactions",
    ];
    return new Promise((resolve, reject) => {
      this.vModeHandle.setLoadingMode(true);
      registerWithEmail(
        name, email, password, phone, companyName, businessType, region,
        onboardStatus, mTrans[monthlyTransactions - 1], salesTaxFreq, fiscalYearEnd, socialMode
      )
        .then(async data => {
          this.vModeHandle.setLoadingMode(false);
          if (data.isVerified) {
            this.username = data.name || '';
            this.email = data.email || '';

            await _storeData('authToken', data.jwt || "");
            await _storeData('username', this.username);
            await _storeData('email', this.email);

            this.showSnackMsg(data.message);
            resolve(true);
          } else {
            this.showSnackMsg(data.message);
            resolve(false);
          }
        })
        .catch(e => {
          this.vModeHandle.setLoadingMode(false);
          this.showSnackMsg(e.message);
          reject(e);
        });
    });
  }

  @action.bound confirmMail(token) {
    this.vModeHandle.setLoadingMode(true);
    return new Promise((resolve, reject) => {
      confirmEmail(token)
        .then(async data => {
          this.vModeHandle.setLoadingMode(false);
          this.username = data.name || '';
          this.email = data.email || '';

          await _storeData('authToken', data.jwt || "");
          await _storeData('username', this.username);
          await _storeData('email', this.email);

          this.isLoggedIn = true;
          this.showSnackMsg(data.message);
          resolve(true);
        })
        .catch(e => {
          this.vModeHandle.setLoadingMode(false);
          this.showSnackMsg(e.message);
          this.logout();
          reject(e);
        });
    });
  }

  @action.bound setPendingEmail(email) {
    this.pendingEmail = email;
  }

  /**
   *  Logout
   */
  async clearStorage() {
    this.isLoggedIn = false;
    this.username = '';
    this.email = '';
    await _clear();
  }
  @action.bound async logout() {
    const lang = await AsyncStorage.getItem('lang')
    await this.clearStorage();
    AsyncStorage.setItem('lang', JSON.stringify(JSON.parse(lang)));
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

export default (snackbar, viewModeStore) => new AuthStore(snackbar, viewModeStore);
