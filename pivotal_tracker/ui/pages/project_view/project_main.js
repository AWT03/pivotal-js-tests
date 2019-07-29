require('module-alias/register');
const TabPage = require('@core_ui/pages/tab_page.js');
const ProjectAnalytics = require('@pivotal_ui/pages/project_view/project_analytics.js');
const ProjectMembers = require('@pivotal_ui/pages/project_view/project_members.js');
const ProjectMore = require('@pivotal_ui/pages/project_view/project_more.js');
const StoriesPage = require('@pivotal_ui/pages/stories/stories_page.js');

let project_stories_tab = '[data-aid="navTab-stories"]';
let project_analytics_tab = '[data-aid="navTab-analytics"]';
let project_members_tab = '[data-aid="navTab-members"]';
let project_more_tab = '[data-aid="navTab-more"]';
let background_div = '.scrim';

class ProjectMain extends (TabPage){

    constructor(){
        super();
        this.tabs = {
            "Stories": () => {
                this.getStoriesTab();
            },
            "Analytics": () => {
                this.getAnalyticsTab();
            },
            "Members": () => {
                this.getMembersTab();
            },
            "More": () => {
                this.getMoreTab();
            }
        }
        this.tab = new StoriesPage();
    }

    getStoriesTab(){
        browser.click(project_stories_tab);
        this.tab = new StoriesPage();
    }

    getAnalyticsTab(){
        browser.click(project_analytics_tab);
        this.tab = new ProjectAnalytics();
    }

    getMembersTab(){
        browser.click(project_members_tab);
        this.tab = new ProjectMembers();
    }

    getMoreTab(){
        browser.click(project_more_tab);
        this.tab = ProjectMore();
    }

}

module.exports = ProjectMain;