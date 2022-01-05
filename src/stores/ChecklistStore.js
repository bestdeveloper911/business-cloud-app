import { observable, action, reaction } from 'mobx';
import { getCloudTasks, markTaskAsComplete } from "../lib/apis";
import {_retrieveData} from "../utils";

class ChecklistStore {
  @observable isLoggedIn = false;
  @observable email = '';
  @observable tasks = {}; // Tasks
  @observable myTasksList = {}; // My Tasks
  @observable teamTasksList = {}; // Team Tasks
  @observable lengthOfMyTasks = 0;
  @observable lengthOfTeamTasks = 0;
  @observable lengthOfTodoTasks = 0;
  @observable tabItems = [];
  vModeHandle = null;
  notificationStoreHandle = null;

  constructor(snackbar, authStore, viewModeStore, salesforceStore, notificationStore) {
    this.snackbar = snackbar;
    this.isLoggedIn = authStore.isLoggedIn;
    this.email = authStore.email;
    this.vModeHandle = viewModeStore;
    this.salesforceStoreHandle = salesforceStore;
    this.notificationStoreHandle = notificationStore;

    reaction(
      () => ({
        isLoggedIn: authStore.isLoggedIn,
        email: authStore.email
      }),
      authObj => {
        this.isLoggedIn = authObj.isLoggedIn;
        this.email = authObj.email;
        if (this.isLoggedIn) {
          this.requestCloudTasks();
        }
      }
    );

    if (this.isLoggedIn) {
      this.requestCloudTasks();
    }
  }

  @action.bound async markTaskAsComplete(Id, isDone) {
    this.vModeHandle.setLoadingMode(true);
    const authToken = await _retrieveData('authToken');
    return new Promise(resolve => {
      markTaskAsComplete(authToken, { Id: Id, mode: isDone })
        .then(() => {
          this.requestCloudTasks();
          this.salesforceStoreHandle.requestProfile();
          this.notificationStoreHandle.requestNotifications();
          this.vModeHandle.setLoadingMode(false);
          resolve(true);
        })
        .catch(() => {
          this.vModeHandle.setLoadingMode(false);
          resolve(false);
        })
    });
  }

  filterObj = (item, index, isMyTask = false) => {
    return {
      id: index + 1,
      objectId: item.Id,
      name: item.Related_Target_Name__c || '',
      property: item.Related_target_category__c || '',
      icon: item.Accountcc_avatar__c || '',
      relatedLogo: item.Related_Logo__c || '',
      desc: item.description255__c || '',
      date: item.Date_text_2__c || '',
      price: item.Points__c || null,
      link: item.Link__c || '',
    };
  };

  @action.bound async requestCloudTasks() {
    this.vModeHandle.setLoadingMode(true);
    const authToken = await _retrieveData('authToken');
    getCloudTasks(authToken, this.email)
      .then(ret => {
        const myData = ret.data || [];
        const teamData = ret.dataV2 || [];

        /**
         *  My Tasks
         */
        let expiredTasks = []; let todayTasks = []; let thisWeekTasks = []; let nextWeekTasks = []; let thisMonthTasks = [];
        let nextMonthTasks = []; let next3MonthsTasks = []; let thisYearTasks = []; let nextYearTasks = []; let completedTasks = [];
        (myData || []).map((item, index) => {
          if (item.Completed__c) {
            completedTasks.push(this.filterObj(item, index, true));
          } else {
            if (item.Date_text__c === 'Expired') {
              expiredTasks.push(this.filterObj(item, index, true));
            }
            if (item.Date_text__c === 'Today') {
              todayTasks.push(this.filterObj(item, index, true));
            }
            if (item.Date_text__c === 'This Week') {
              thisWeekTasks.push(this.filterObj(item, index, true));
            }
            if (item.Date_text__c === 'Next Week') {
              nextWeekTasks.push(this.filterObj(item, index, true));
            }
            if (item.Date_text__c === 'This Month') {
              thisMonthTasks.push(this.filterObj(item, index, true));
            }
            if (item.Date_text__c === 'Next Month') {
              nextMonthTasks.push(this.filterObj(item, index, true));
            }
            if (item.Date_text__c === 'Next 3 Months') {
              next3MonthsTasks.push(this.filterObj(item, index, true));
            }
            if (item.Date_text__c === 'This Year') {
              thisYearTasks.push(this.filterObj(item, index, true));
            }
            if (item.Date_text__c === 'Next Year') {
              nextYearTasks.push(this.filterObj(item, index, true));
            }
          }
        });

        /**
         *  Team Tasks
         */
        let v2_expiredTasks = []; let v2_todayTasks = []; let v2_thisWeekTasks = []; let v2_nextWeekTasks = []; let v2_thisMonthTasks = [];
        let v2_nextMonthTasks = []; let v2_next3MonthsTasks = []; let v2_thisYearTasks = []; let v2_nextYearTasks = []; let v2_completedTasks = [];

        (teamData || []).map((item, index) => {
          if (item.Completed__c) {
            v2_completedTasks.push(this.filterObj(item, index));
          } else {
            if (item.Date_text__c === 'Expired') {
              v2_expiredTasks.push(this.filterObj(item, index));
            }
            if (item.Date_text__c === 'Today') {
              v2_todayTasks.push(this.filterObj(item, index));
            }
            if (item.Date_text__c === 'This Week') {
              v2_thisWeekTasks.push(this.filterObj(item, index));
            }
            if (item.Date_text__c === 'Next Week') {
              v2_nextWeekTasks.push(this.filterObj(item, index));
            }
            if (item.Date_text__c === 'This Month') {
              v2_thisMonthTasks.push(this.filterObj(item, index));
            }
            if (item.Date_text__c === 'Next Month') {
              v2_nextMonthTasks.push(this.filterObj(item, index));
            }
            if (item.Date_text__c === 'Next 3 Months') {
              v2_next3MonthsTasks.push(this.filterObj(item, index));
            }
            if (item.Date_text__c === 'This Year') {
              v2_thisYearTasks.push(this.filterObj(item, index));
            }
            if (item.Date_text__c === 'Next Year') {
              v2_nextYearTasks.push(this.filterObj(item, index));
            }
          }
        });

        this.tasks = {
          myTasks: [
            { state: 'EXPIRED', tasks: expiredTasks },
            { state: 'TODAY', tasks: todayTasks },
            { state: 'THIS WEEK', tasks: thisWeekTasks },
            { state: 'NEXT WEEK', tasks: nextWeekTasks },
            { state: 'THIS MONTH', tasks: thisMonthTasks },
            { state: 'NEXT MONTH', tasks: nextMonthTasks },
            { state: 'NEXT 3 MONTHS', tasks: next3MonthsTasks },
            { state: 'THIS YEAR', tasks: thisYearTasks },
            { state: 'NEXT YEAR', tasks: nextYearTasks },
            { state: 'COMPLETED', tasks: completedTasks }
          ],
          teamTasks: [
            { state: 'EXPIRED', tasks: v2_expiredTasks },
            { state: 'TODAY', tasks: v2_todayTasks },
            { state: 'THIS WEEK', tasks: v2_thisWeekTasks },
            { state: 'NEXT WEEK', tasks: v2_nextWeekTasks },
            { state: 'THIS MONTH', tasks: v2_thisMonthTasks },
            { state: 'NEXT MONTH', tasks: v2_nextMonthTasks },
            { state: 'NEXT 3 MONTHS', tasks: v2_next3MonthsTasks },
            { state: 'THIS YEAR', tasks: v2_thisYearTasks },
            { state: 'NEXT YEAR', tasks: v2_nextYearTasks },
            { state: 'COMPLETED', tasks: v2_completedTasks }
          ]
        };
        this.lengthOfMyTasks = (myData.length - completedTasks.length) || 0;
        this.lengthOfTeamTasks = (teamData.length - v2_completedTasks.length) || 0;
        this.myTasksList = myData;
        this.teamTasksList = teamData;
        this.tabItems = [
          {
            id: 1,
            name: 'Todo',
            count: Number(this.lengthOfMyTasks) + Number(this.lengthOfTeamTasks),
          },
          {
            id: 2,
            name: 'Done',
            count: Number(completedTasks.length) + Number(v2_completedTasks.length),
          },
          {
            id: 3,
            name: 'All',
            count: Number(myData.length) + Number(teamData.length),
          }
        ];
        this.lengthOfTodoTasks = Number(this.lengthOfMyTasks) + Number(this.lengthOfTeamTasks);
        this.vModeHandle.setLoadingMode(false);
      })
      .catch((err) => {
        console.log('err:', err);
        this.vModeHandle.setLoadingMode(false);
      })
  }
}

export default (snackbar, authStore, viewModeStore, salesforceStore, notificationStore) =>
  new ChecklistStore(snackbar, authStore, viewModeStore, salesforceStore, notificationStore);
