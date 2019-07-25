require('module-alias/register');
const Element = require('@core_ui/pages/element.js');

class TabPage extends Element{

    constructor(){
        super();
        this.tabs ={

        };
        //this.tab = {} ;
    }

    update_tabs(tabs){
        for(let tag in tabs)
            this.tabs[tag]  = tabs[tag]
    }

    /*go_to(tab){
        this.tabs[tab]()
    }

    do_action(value){
        var switch_tab;
        switch_tab = this.tab.do_action(value);
        if (switch_tab in this.tabs){
            this.go_to(switch_tab);
            return '';
        }
        return switch_tab;
    }

    get_tab(){
        return this.tab
    }*/
}

module.exports = TabPage;