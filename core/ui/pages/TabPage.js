require('module-alias/register');
const ActionPage = require(`@core_ui/pages/ActionPage.js`);

class TabPage extends ActionPage{

    constructor(){
        super();
        this.tabs ={};
        this.tab = null;
    }

    updateTabs(tabs){
        this.tabs = Object.assign(this.tabs, tabs)
    }

    goTo(tab){
        this.tabs[tab]();
    }

    doAction(value, params) {
        let switch_tab = this.tab.doAction(value, params);
        if (switch_tab in this.tabs){
            this.goTo(switch_tab);
            return '';
        }
        return switch_tab;
    }

    getTab(){
        return this.tab;
    }
}

module.exports = TabPage;