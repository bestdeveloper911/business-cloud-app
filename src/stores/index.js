import once from "lodash/once";

import SnackbarStore from "./SnackbarStore";
import ViewModeStore from "./ViewModeStore";
import AuthStore from "./AuthStore";
import SalesforceStore from "./SalesforceStore";
import KnowledgeStore from "./KnowledgeStore";
import XeroStore from "./XeroStore";
import SolutionsStore from "./SolutionsStore";
import MySolutionsStore from "./MySolutionsStore";
import ChecklistStore from "./ChecklistStore";
import TargetsStore from "./TargetsStore";
import NotificationStore from "./NotificationStore";

const SNACKBARSTORE = "SnackbarStore";
const VIEWMODESTORE = "ViewModeStore";
const AUTHSTORE = "AuthStore";
const SALESFORCESTORE = "SalesforceStore";
const KNOWLEDGESTORE = "KnowledgeStore";
const XEROSTORE = "XeroStore";
const SOLUTIONSSTORE = "SolutionsStore";
const MYSOLUTIONSSTORE = "MySolutionsStore";
const CHECKLISTSTORE = "ChecklistStore";
const TARGETSSTORE = "TargetsStore";
const NOTIFICATIONSTORE = "NotificationStore";

export const STORE_KEYS = {
  SNACKBARSTORE,
  VIEWMODESTORE,
  AUTHSTORE,
  SALESFORCESTORE,
  KNOWLEDGESTORE,
  XEROSTORE,
  SOLUTIONSSTORE,
  MYSOLUTIONSSTORE,
  CHECKLISTSTORE,
  TARGETSSTORE,
  NOTIFICATIONSTORE,
};

export default once(() => {
  const snackbarStore = SnackbarStore();
  const viewModeStore = ViewModeStore();
  const authStore = AuthStore(snackbarStore.Snackbar, viewModeStore);
  const salesforceStore = SalesforceStore(snackbarStore.Snackbar, authStore, viewModeStore);
  const notificationStore = NotificationStore(snackbarStore.Snackbar, authStore, viewModeStore);
  const knowledgeStore = KnowledgeStore(viewModeStore);
  const xeroStore = XeroStore(snackbarStore.Snackbar, authStore, viewModeStore);
  const solutionsStore = SolutionsStore(snackbarStore.Snackbar, authStore, viewModeStore);
  const mySolutionsStore = MySolutionsStore(snackbarStore.Snackbar, authStore, viewModeStore);
  const checklistStore = ChecklistStore(snackbarStore.Snackbar, authStore, viewModeStore, salesforceStore, notificationStore);
  const targetsStore = TargetsStore(snackbarStore.Snackbar, authStore, checklistStore, viewModeStore, salesforceStore, notificationStore);

  return {
    [STORE_KEYS.SNACKBARSTORE]: snackbarStore,
    [STORE_KEYS.VIEWMODESTORE]: viewModeStore,
    [STORE_KEYS.AUTHSTORE]: authStore,
    [STORE_KEYS.SALESFORCESTORE]: salesforceStore,
    [STORE_KEYS.KNOWLEDGESTORE]: knowledgeStore,
    [STORE_KEYS.XEROSTORE]: xeroStore,
    [STORE_KEYS.SOLUTIONSSTORE]: solutionsStore,
    [STORE_KEYS.MYSOLUTIONSSTORE]: mySolutionsStore,
    [STORE_KEYS.CHECKLISTSTORE]: checklistStore,
    [STORE_KEYS.TARGETSSTORE]: targetsStore,
    [STORE_KEYS.NOTIFICATIONSTORE]: notificationStore,
  };
});
