require('module-alias/register');
const TabPage = require('@core_ui/pages/TabPage.js');
const StoriesBacklog = require('@pivotal_ui/pages/stories/StoriesBacklog.js');


class StoriesPage extends (TabPage){

    constructor(){
        super();
        this.tabs = {
            "Story_backlog": () => {
                this.getStoriesBacklogTab();
            }
        }
        this.tab = new StoriesBacklog();
    }

    getStoriesBacklogTab(){
        this.tab = new StoriesPage();
    }

}

module.exports = StoriesPage;