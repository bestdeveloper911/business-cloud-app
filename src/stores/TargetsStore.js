import {observable, action, reaction} from 'mobx';
import {getCloudmebTargets, markTaskAsComplete} from "../lib/apis";
import {_retrieveData} from "../utils";

class TargetsStore {
    @observable isLoggedIn = false;
    @observable email = '';
    @observable cloudmebTargets = []; // cloudmebTargets
    @observable tabItems = [];
    @observable myTasksList = {}; // My Tasks
    @observable teamTasksList = {}; // Team Tasks
    @observable activeTargetsLength = 0;
    vModeHandle = null;
    cListStoreHandle = null;
    notificationStoreHandle = null;

    constructor(snackbar, authStore, checklistStore, viewModeStore, salesforceStore, notificationStore) {
        this.snackbar = snackbar;
        this.isLoggedIn = authStore.isLoggedIn;
        this.email = authStore.email;
        this.vModeHandle = viewModeStore;
        this.cListStoreHandle = checklistStore;
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
                    this.requestCloudmebTargets();
                }
            }
        );

        reaction(
            () => ({
                myTasksList: checklistStore.myTasksList,
                teamTasksList: checklistStore.teamTasksList,
            }),
            checklistObj => {
                this.myTasksList = checklistObj.myTasksList;
                this.teamTasksList = checklistObj.teamTasksList;
                this.requestCloudmebTargets();
            }
        );

        if (this.isLoggedIn) {
            this.requestCloudmebTargets();
        }
    }

    filterObj = (item, index) => {
        return {
            objectId: item.Id || '',
            id: index + 1,
            desc: item.description255__c || '',
            date: item.Date_text_2__c || '',
            price: item.Points__c || null,
            team_member_image: item.Accountcc_avatar__c || '',
            link: item.Link__c || '',
            due_date: item.Due_Date__c || '',
        };
    };

    @action.bound markTaskAsComplete(Id, isDone) {
        this.vModeHandle.setLoadingMode(true);
        return new Promise(async resolve => {
            const authToken = await _retrieveData('authToken');
            markTaskAsComplete(authToken, {Id: Id, mode: isDone})
                .then(() => {
                    this.cListStoreHandle.requestCloudTasks();
                    this.requestCloudmebTargets();
                    this.salesforceStoreHandle.requestProfile();
                    this.notificationStoreHandle.requestNotifications();
                    this.vModeHandle.setLoadingMode(false);
                    resolve(true);
                })
                .catch(err => {
                    this.vModeHandle.setLoadingMode(false);
                    resolve(false);
                })
        });
    }

    @action.bound async requestCloudmebTargets() {
        this.vModeHandle.setLoadingMode(true);
        const authToken = await _retrieveData('authToken');
        getCloudmebTargets(authToken, this.email)
            .then(ret => {
                if (ret.data) {
                    const data = ret.data || [];
                    const targets = [];
                    let _completed = 0;
                    data.sort(function (a, b) {
                        return a.completion__c - b.completion__c;
                    });
                    data.map((item, index) => {
                        const targetId = item.Id;
                        const _myTasks = [];
                        const _teamTasks = [];
                        this.myTasksList.map((myTask, index02) => {
                            if (myTask.Cloudmeb_Target__c === targetId) {
                                _myTasks.push(myTask);
                            }
                        });
                        this.teamTasksList.map((teamTask, index02) => {
                            if (teamTask.Cloudmeb_Target__c === targetId) {
                                _teamTasks.push(teamTask);
                            }
                        });

                        /**
                         *  My Tasks
                         */
                        let expiredTasks = [];
                        let todayTasks = [];
                        let thisWeekTasks = [];
                        let nextWeekTasks = [];
                        let thisMonthTasks = [];
                        let nextMonthTasks = [];
                        let next3MonthsTasks = [];
                        let thisYearTasks = [];
                        let nextYearTasks = [];
                        let completedTasks = [];
                        (_myTasks || []).map((item, index) => {
                            if (item.Completed__c) {
                                completedTasks.push(this.filterObj(item, index));
                            } else {
                                if (item.Date_text__c === 'Expired') {
                                    expiredTasks.push(this.filterObj(item, index));
                                }
                                if (item.Date_text__c === 'Today') {
                                    todayTasks.push(this.filterObj(item, index));
                                }
                                if (item.Date_text__c === 'This Week') {
                                    thisWeekTasks.push(this.filterObj(item, index));
                                }
                                if (item.Date_text__c === 'Next Week') {
                                    nextWeekTasks.push(this.filterObj(item, index));
                                }
                                if (item.Date_text__c === 'This Month') {
                                    thisMonthTasks.push(this.filterObj(item, index));
                                }
                                if (item.Date_text__c === 'Next Month') {
                                    nextMonthTasks.push(this.filterObj(item, index));
                                }
                                if (item.Date_text__c === 'Next 3 Months') {
                                    next3MonthsTasks.push(this.filterObj(item, index));
                                }
                                if (item.Date_text__c === 'This Year') {
                                    thisYearTasks.push(this.filterObj(item, index));
                                }
                                if (item.Date_text__c === 'Next Year') {
                                    nextYearTasks.push(this.filterObj(item, index));
                                }
                            }
                        });

                        /**
                         *  Team Tasks
                         */
                        let v2_expiredTasks = [];
                        let v2_todayTasks = [];
                        let v2_thisWeekTasks = [];
                        let v2_nextWeekTasks = [];
                        let v2_thisMonthTasks = [];
                        let v2_nextMonthTasks = [];
                        let v2_next3MonthsTasks = [];
                        let v2_thisYearTasks = [];
                        let v2_nextYearTasks = [];
                        let v2_completedTasks = [];

                        (_teamTasks || []).map((item, index) => {
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

                        const myTasksLength = expiredTasks.length + todayTasks.length + thisWeekTasks.length + nextWeekTasks.length + thisMonthTasks.length + nextMonthTasks.length + next3MonthsTasks.length + thisYearTasks.length + nextYearTasks.length + completedTasks.length;
                        const teamTasksLength = v2_expiredTasks.length + v2_todayTasks.length + v2_thisWeekTasks.length + v2_nextWeekTasks.length + v2_thisMonthTasks.length + v2_nextMonthTasks.length + v2_next3MonthsTasks.length + v2_thisYearTasks.length + v2_nextYearTasks.length + v2_completedTasks.length;

                        /**
                         * Sorting
                         */
                        expiredTasks.sort((a, b) => {
                            const aRelease = Date.parse(a.due_date || '');
                            const bRelease = Date.parse(b.due_date || '');
                            return aRelease > bRelease ? 1 : -1;
                        });
                        todayTasks.sort((a, b) => {
                            const aRelease = Date.parse(a.due_date || '');
                            const bRelease = Date.parse(b.due_date || '');
                            return aRelease > bRelease ? 1 : -1;
                        });
                        thisWeekTasks.sort((a, b) => {
                            const aRelease = Date.parse(a.due_date || '');
                            const bRelease = Date.parse(b.due_date || '');
                            return aRelease > bRelease ? 1 : -1;
                        });
                        nextWeekTasks.sort((a, b) => {
                            const aRelease = Date.parse(a.due_date || '');
                            const bRelease = Date.parse(b.due_date || '');
                            return aRelease > bRelease ? 1 : -1;
                        });
                        thisMonthTasks.sort((a, b) => {
                            const aRelease = Date.parse(a.due_date || '');
                            const bRelease = Date.parse(b.due_date || '');
                            return aRelease > bRelease ? 1 : -1;
                        });
                        nextMonthTasks.sort((a, b) => {
                            const aRelease = Date.parse(a.due_date || '');
                            const bRelease = Date.parse(b.due_date || '');
                            return aRelease > bRelease ? 1 : -1;
                        });
                        next3MonthsTasks.sort((a, b) => {
                            const aRelease = Date.parse(a.due_date || '');
                            const bRelease = Date.parse(b.due_date || '');
                            return aRelease > bRelease ? 1 : -1;
                        });
                        thisYearTasks.sort((a, b) => {
                            const aRelease = Date.parse(a.due_date || '');
                            const bRelease = Date.parse(b.due_date || '');
                            return aRelease > bRelease ? 1 : -1;
                        });
                        nextYearTasks.sort((a, b) => {
                            const aRelease = Date.parse(a.due_date || '');
                            const bRelease = Date.parse(b.due_date || '');
                            return aRelease > bRelease ? 1 : -1;
                        });
                        completedTasks.sort((a, b) => {
                            const aRelease = Date.parse(a.due_date || '');
                            const bRelease = Date.parse(b.due_date || '');
                            return aRelease > bRelease ? 1 : -1;
                        });

                        v2_expiredTasks.sort((a, b) => {
                            const aRelease = Date.parse(a.due_date || '');
                            const bRelease = Date.parse(b.due_date || '');
                            return aRelease > bRelease ? 1 : -1;
                        });
                        v2_todayTasks.sort((a, b) => {
                            const aRelease = Date.parse(a.due_date || '');
                            const bRelease = Date.parse(b.due_date || '');
                            return aRelease > bRelease ? 1 : -1;
                        });
                        v2_thisWeekTasks.sort((a, b) => {
                            const aRelease = Date.parse(a.due_date || '');
                            const bRelease = Date.parse(b.due_date || '');
                            return aRelease > bRelease ? 1 : -1;
                        });
                        v2_nextWeekTasks.sort((a, b) => {
                            const aRelease = Date.parse(a.due_date || '');
                            const bRelease = Date.parse(b.due_date || '');
                            return aRelease > bRelease ? 1 : -1;
                        });
                        v2_thisMonthTasks.sort((a, b) => {
                            const aRelease = Date.parse(a.due_date || '');
                            const bRelease = Date.parse(b.due_date || '');
                            return aRelease > bRelease ? 1 : -1;
                        });
                        v2_nextMonthTasks.sort((a, b) => {
                            const aRelease = Date.parse(a.due_date || '');
                            const bRelease = Date.parse(b.due_date || '');
                            return aRelease > bRelease ? 1 : -1;
                        });
                        v2_next3MonthsTasks.sort((a, b) => {
                            const aRelease = Date.parse(a.due_date || '');
                            const bRelease = Date.parse(b.due_date || '');
                            return aRelease > bRelease ? 1 : -1;
                        });
                        v2_thisYearTasks.sort((a, b) => {
                            const aRelease = Date.parse(a.due_date || '');
                            const bRelease = Date.parse(b.due_date || '');
                            return aRelease > bRelease ? 1 : -1;
                        });
                        v2_nextYearTasks.sort((a, b) => {
                            const aRelease = Date.parse(a.due_date || '');
                            const bRelease = Date.parse(b.due_date || '');
                            return aRelease > bRelease ? 1 : -1;
                        });
                        v2_completedTasks.sort((a, b) => {
                            const aRelease = Date.parse(a.due_date || '');
                            const bRelease = Date.parse(b.due_date || '');
                            return aRelease > bRelease ? 1 : -1;
                        });

                        /**
                         *  Compose
                         */
                        targets.push({
                            index: index,
                            target_name: item.Target_Name__c || '',
                            target_property: item.Related_Name__c || '',
                            team_member: item.accountcc_name__c || '',
                            date: item.Target_Date__c || '',
                            dateStr: item.Date_text__c || '',
                            tasks_count: item.Tasks_count_All__c || 0,
                            price: item.Total_points_available__c || 0,
                            icon: item.Related_Logo__c || '',
                            completed: item.completion__c === 100,
                            percentage: item.completion__c || 0,
                            myTasks: [
                                {state: 'EXPIRED', tasks: expiredTasks},
                                {state: 'TODAY', tasks: todayTasks},
                                {state: 'THIS WEEK', tasks: thisWeekTasks},
                                {state: 'NEXT WEEK', tasks: nextWeekTasks},
                                {state: 'THIS MONTH', tasks: thisMonthTasks},
                                {state: 'NEXT MONTH', tasks: nextMonthTasks},
                                {state: 'NEXT 3 MONTHS', tasks: next3MonthsTasks},
                                {state: 'THIS YEAR', tasks: thisYearTasks},
                                {state: 'NEXT YEAR', tasks: nextYearTasks},
                                {state: 'COMPLETED', tasks: completedTasks}
                            ],
                            myTasksLength: myTasksLength,
                            teamTasks: [
                                {state: 'EXPIRED', tasks: v2_expiredTasks},
                                {state: 'TODAY', tasks: v2_todayTasks},
                                {state: 'THIS WEEK', tasks: v2_thisWeekTasks},
                                {state: 'NEXT WEEK', tasks: v2_nextWeekTasks},
                                {state: 'THIS MONTH', tasks: v2_thisMonthTasks},
                                {state: 'NEXT MONTH', tasks: v2_nextMonthTasks},
                                {state: 'NEXT 3 MONTHS', tasks: v2_next3MonthsTasks},
                                {state: 'THIS YEAR', tasks: v2_thisYearTasks},
                                {state: 'NEXT YEAR', tasks: v2_nextYearTasks},
                                {state: 'COMPLETED', tasks: v2_completedTasks}
                            ],
                            teamTasksLength: teamTasksLength,
                        });
                        if (item.completion__c === 100) {
                            _completed++;
                        }
                    });
                    this.tabItems = [
                        {
                            id: 1,
                            name: 'Active',
                            count: data.length - _completed
                        },
                        {
                            id: 2,
                            name: 'Completed',
                            count: _completed
                        },
                        {
                            id: 3,
                            name: 'All',
                            count: data.length
                        }
                    ];
                    targets.sort((a, b) => {
                        const aRelease = Date.parse(a.date || '');
                        const bRelease = Date.parse(b.date || '');
                        return aRelease > bRelease ? 1 : -1;
                    })
                    this.cloudmebTargets = targets;
                    this.activeTargetsLength = data.length - _completed;
                }
                this.vModeHandle.setLoadingMode(false);
            })
            .catch(() => {
                this.cloudmebTargets = [];
                this.vModeHandle.setLoadingMode(false);
            })
    }
}

export default (snackbar, authStore, checklistStore, viewModeStore, salesforceStore, notificationStore) =>
  new TargetsStore(snackbar, authStore, checklistStore, viewModeStore, salesforceStore, notificationStore);
