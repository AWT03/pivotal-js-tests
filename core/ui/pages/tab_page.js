require('module-alias/register');
const Element = require('@core_ui/pages/element.js');
const ActionPage = require('@core_ui/pages/action_page.js');

class TabPage extends ActionPage{

    constructor(){
        super();
        this.tabs ={};
        this.tab = null;
    }

    updateTabs(tabs){
        for(let tag in tabs)
            this.tabs[tag]  = tabs[tag];
    }

    goTo(tab){
        this.tabs[tab]();
    }

    doAction(value) {
        let switch_tab = this.tab.doAction(value);
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