import {observable, action, reaction} from 'mobx';
import {
    getKnowledges, getGuides
} from "../lib/apis";
import {_retrieveData} from "../utils";

class KnowledgeStore {
    @observable knowledgeData = [];
    @observable sizeOfKnowData = 0;
    @observable guidesData = [];
    @observable sizeOfGuidesData = 0;
    vModeHandle = null;

    constructor(viewModeStore) {
        this.vModeHandle = viewModeStore;
        this.getKnowledgeData();
        this.getGuidesData();
    }

    @action.bound async getKnowledgeData() {
        this.vModeHandle.setLoadingMode(true);
        const authToken = await _retrieveData('authToken');
        return new Promise(resolve => {
            getKnowledges(authToken)
                .then(ret => {
                    this.knowledgeData = ret.data || [];
                    this.sizeOfKnowData = this.knowledgeData.length;
                    this.vModeHandle.setLoadingMode(false);
                })
                .catch(err => {
                    console.log('error:', err);
                    this.sizeOfKnowData = 0;
                    this.vModeHandle.setLoadingMode(false);
                });
        });
    }

    @action.bound async getGuidesData() {
        this.vModeHandle.setLoadingMode(true);
        const authToken = await _retrieveData('authToken');
        return new Promise(resolve => {
            getGuides(authToken)
                .then(ret => {
                    this.guidesData = ret.data || [];
                    this.sizeOfGuidesData = this.guidesData.length;
                    this.vModeHandle.setLoadingMode(false);
                })
                .catch(err => {
                    console.log('error:', err);
                    this.sizeOfGuidesData = 0;
                    this.vModeHandle.setLoadingMode(false);
                });
        });
    }
}

export default (viewModeStore) => new KnowledgeStore(viewModeStore);
