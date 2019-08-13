require('module-alias/register');
const Many = require('extends-classes');
const ActionPage = require(`@core_ui/pages/ActionPage.js`);
const ElementSearch = require(`@core_ui/pages/ElementSearch.js`);

let add_story_backlog = 'div[id*="panel_backlog"] a[class*="FirstStoryAddButton"]'
let project_more_tab = 'a[data-aid="navTab-more"]'
let story_title = '//span[text()="$(expected_name)"]'


class ProjectStories extends Many(ActionPage, ElementSearch){

    constructor(){
        super();
        this.actions = {
            "More":  () => {
                browser.pause(15000);
                browser.click(project_more_tab);
                return "ProjectMorePage";
            },
            "Add Story":  () => {
                browser.pause(5000);
                browser.click(add_story_backlog);
                return "StoryBacklogForm";
            }
        };
        this.search_elements = {
            "backlog_list": (name) => {
                browser.pause(5000);
                let replace =  story_title.replace('$(expected_name)', name);
                return browser.isExisting(replace);
            },
        };

    }
}

module.exports = ProjectStories;