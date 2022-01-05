import { observable, action, reaction } from 'mobx';

class ViewModeStore {
  @observable viewMode = 'education_all';
  @observable solutionsMode = 'solution_product'; // solution_all, solution_product, solution_service, solution_template
  @observable settingsMode = 'settings_billing'; // settings_financial, settings_billing, settings_profile
  @observable isLoading = 0;

  constructor() {
  }

  @action.bound setViewMode(mode) {
    this.viewMode = mode;
  }

  @action.bound setSolutionsMode(mode) {
    this.solutionsMode = mode;
  }

  @action.bound setSettingsMode(mode) {
    this.settingsMode = mode;
  }

  @action.bound setLoadingMode(mode) {
    if (mode) {
      this.isLoading ++;
    } else {
      this.isLoading --;
    }
  }
}

export default () => new ViewModeStore();
