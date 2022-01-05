import axios from "axios";
import { SERVER_URL } from "../../config";
import {_clear} from "../../utils";

const AUTH_SERVER_URL = SERVER_URL;
const getHeaders = token => ({
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
});

/*register start*/
export const register = (data) =>
  axios.post(`${AUTH_SERVER_URL}/api/auth/registerUser`, data, getHeaders())
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));
/*register end*/

export const loginWithEmail = (email, password) =>
  axios.post(`${AUTH_SERVER_URL}/api/auth/login`, { email, password }, getHeaders())
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

export const loginWithGmail = (data) =>
  axios.post(`${AUTH_SERVER_URL}/api/auth/loginWithGmail`, { oAuthData: data }, getHeaders())
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

export const existEmail = (email) =>
  axios.post(`${AUTH_SERVER_URL}/api/auth/isEmail`, { email }, getHeaders())
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

export const resetPasswordRequest = (email) =>
  axios.post(`${AUTH_SERVER_URL}/api/auth/reset_password_request`, { email }, getHeaders())
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

export const resetPassword = (password, token) =>
  axios.post(`${AUTH_SERVER_URL}/api/auth/reset_password`, { password, token }, getHeaders())
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

export const updateUsername = (deviceToken, obj) =>
  axios.post(`${AUTH_SERVER_URL}/api/auth/updateUsername`, obj, getHeaders(deviceToken))
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

export const registerWithEmail = (
  name, email, password, phone, companyName, businessType, region, onboardStatus, monthlyTransactions, salesTaxFreq, fiscalYearEnd, socialMode
) =>
  axios.post(`${AUTH_SERVER_URL}/api/auth/register`, {
    name, email, password, phone, companyName, businessType, region, onboardStatus, monthlyTransactions, salesTaxFreq, fiscalYearEnd, socialMode
  }, getHeaders())
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

export const confirmEmail = (token) =>
  axios.post(`${AUTH_SERVER_URL}/api/auth/verify`, { token }, getHeaders())
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

export const getRegions = () =>
  axios.post(`${AUTH_SERVER_URL}/api/auth/getRegions`, null, getHeaders())
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

/**
 *  Salesforce API
 */
export const getProfile = (deviceToken, email, navigation = null) =>
  axios.post(`${AUTH_SERVER_URL}/api/salesforce/profile`, { email }, getHeaders(deviceToken))
    .then(({ data }) => data)
    .catch(async err => {
      const data = err.response.data;
      if (data?.tokenStatus === 301) {
        await _clear();
        navigation?.navigate('SignIn');
      }
      return Promise.reject(err.response.data)
    });

export const getProducts = (deviceToken, email) =>
  axios.post(`${AUTH_SERVER_URL}/api/salesforce/product`, { email }, getHeaders(deviceToken))
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

export const getServices = (deviceToken, email) =>
  axios.post(`${AUTH_SERVER_URL}/api/salesforce/service`, { email }, getHeaders(deviceToken))
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

export const updateProfile = (deviceToken, obj) =>
  axios.post(`${AUTH_SERVER_URL}/api/salesforce/updateprofile`, obj, getHeaders(deviceToken))
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

export const getCloudProducts = (deviceToken, email) =>
  axios.post(`${AUTH_SERVER_URL}/api/salesforce/get_cmp`, { email }, getHeaders(deviceToken))
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

export const createCloudProducts = (deviceToken, obj) =>
  axios.post(`${AUTH_SERVER_URL}/api/salesforce/create_cmp`, obj, getHeaders(deviceToken))
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

export const getCloudServices = (deviceToken, email) =>
  axios.post(`${AUTH_SERVER_URL}/api/salesforce/get_cms`, { email }, getHeaders(deviceToken))
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

export const createCloudServices = (deviceToken, obj) =>
  axios.post(`${AUTH_SERVER_URL}/api/salesforce/create_cms`, obj, getHeaders(deviceToken))
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

export const getNotifications = (deviceToken, email) =>
  axios.post(`${AUTH_SERVER_URL}/api/salesforce/notifications`, { email }, getHeaders(deviceToken))
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

export const markAsReadMsg = (deviceToken, obj) =>
  axios.post(`${AUTH_SERVER_URL}/api/salesforce/mark_as_read`, obj, getHeaders(deviceToken))
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

export const getCloudAdvisors = (deviceToken, obj) =>
  axios.post(`${AUTH_SERVER_URL}/api/salesforce/advisors`, obj, getHeaders(deviceToken))
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

export const getCloudTasks = (deviceToken, email) =>
  axios.post(`${AUTH_SERVER_URL}/api/salesforce/tasks`, { email }, getHeaders(deviceToken))
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

export const getXeroTemplates = (deviceToken, obj) =>
  axios.post(`${AUTH_SERVER_URL}/api/salesforce/xero_templates`, obj, getHeaders(deviceToken))
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

export const getMyTemplates = (deviceToken, email) =>
  axios.post(`${AUTH_SERVER_URL}/api/salesforce/my_templates`, { email }, getHeaders(deviceToken))
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

export const getCloudmebTargets = (deviceToken, email) =>
  axios.post(`${AUTH_SERVER_URL}/api/salesforce/get_targets`, { email }, getHeaders(deviceToken))
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

export const getCloudPrograms = (deviceToken, obj) =>
  axios.post(`${AUTH_SERVER_URL}/api/salesforce/cloud_programs`, obj, getHeaders(deviceToken))
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

export const getTeams = (deviceToken, email) =>
  axios.post(`${AUTH_SERVER_URL}/api/salesforce/teams`, { email }, getHeaders(deviceToken))
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

export const getStorages = (deviceToken, email) =>
  axios.post(`${AUTH_SERVER_URL}/api/salesforce/storages`, { email }, getHeaders(deviceToken))
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

export const getMentors = (deviceToken, email) =>
  axios.post(`${AUTH_SERVER_URL}/api/salesforce/mentors`, { email }, getHeaders(deviceToken))
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

export const markTaskAsComplete = (deviceToken, obj) =>
  axios.post(`${AUTH_SERVER_URL}/api/salesforce/mark_task_done`, obj, getHeaders(deviceToken))
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

export const createSubscriptionProduct = (deviceToken, obj) =>
  axios.post(`${AUTH_SERVER_URL}/api/salesforce/create_subscription_product`, obj, getHeaders(deviceToken))
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

export const createSubscriptionService = (deviceToken, obj) =>
  axios.post(`${AUTH_SERVER_URL}/api/salesforce/create_subscription_service`, obj, getHeaders(deviceToken))
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

export const createSubscriptionTemplate = (deviceToken, obj) =>
  axios.post(`${AUTH_SERVER_URL}/api/salesforce/create_subscription_template`, obj, getHeaders(deviceToken))
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

export const cancelSubscriptionProduct = (deviceToken, obj) =>
  axios.post(`${AUTH_SERVER_URL}/api/salesforce/cancel_subscription_product`, obj, getHeaders(deviceToken))
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

export const cancelSubscriptionService = (deviceToken, obj) =>
  axios.post(`${AUTH_SERVER_URL}/api/salesforce/cancel_subscription_service`, obj, getHeaders(deviceToken))
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

export const createCustomer = (deviceToken, obj) =>
  axios.post(`${AUTH_SERVER_URL}/api/salesforce/create_customer`, obj, getHeaders(deviceToken))
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

export const getKnowledges = (deviceToken) =>
  axios.post(`${AUTH_SERVER_URL}/api/know/educations`, {}, getHeaders(deviceToken))
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

export const getGuides = (deviceToken) =>
  axios.post(`${AUTH_SERVER_URL}/api/know/resources`, {}, getHeaders(deviceToken))
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));
/**
 *  Xero API
 */
export const getConsentUrl = (deviceToken) =>
  axios.post(`${AUTH_SERVER_URL}/api/xero/consentUrl`, {}, getHeaders(deviceToken))
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

export const setXeCallback = (deviceToken, obj) =>
  axios.post(`${AUTH_SERVER_URL}/api/xero/callback`, obj, getHeaders(deviceToken))
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

export const getXeroInvoices = (deviceToken) =>
  axios.post(`${AUTH_SERVER_URL}/api/xero/getInvoices`, {}, getHeaders(deviceToken))
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

export const getExecutiveSummary = (deviceToken) =>
  axios.post(`${AUTH_SERVER_URL}/api/xero/executiveSummary`, {}, getHeaders(deviceToken))
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

export const getXeroAccounts = (deviceToken) =>
  axios.post(`${AUTH_SERVER_URL}/api/xero/accounts`, {}, getHeaders(deviceToken))
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));


export const getXeroBankTransactions = (deviceToken) =>
  axios.post(`${AUTH_SERVER_URL}/api/xero/bankTransactions`, {}, getHeaders(deviceToken))
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));
