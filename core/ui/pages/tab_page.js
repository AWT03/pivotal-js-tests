class TabPage{

    constructor(){
        this.tabs ={};
        this.tab = null;
    }

    update_tabs(tabs){
        for(let tag in tabs)
            this.tabs[tag]  = tabs[tag]
    }

    go_to(tab){
        this.tabs[tab]()
    }

    get_tab(hags){
        return this.tab
    }

    do_action(value){
        let switch_tab = this.tab.do_action(value);
        if (switch_tab in this.tabs){
            this.go_to(switch_tab);
            return '';
        }
        return switch_tab;
    }
}
