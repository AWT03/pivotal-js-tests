require('module-alias/register');
const ActionPage = require(`@core_ui/pages/ActionPage.js`);
const ElementSearch = require(`@core_ui/pages/ElementSearch.js`);
const Many = require('extends-classes');

let create_project_button = 'button[id="create-project-button"]';
let specific_project_name = '//a[text()="$(project_name)"]';
let background_div = '.scrim';
let success_delete_object_sms = '//li[@id="notice"][text()="$(project_name) was successfully deleted."]';
let projects_list = '//a[@data-aid="project-name"][text()="$(project_name)"]'


class DashboardProjects extends Many(ActionPage, ElementSearch){

    constructor(){
        super();
        this.actions = {
            "Create Project": () => {
                browser.click(create_project_button);
                return "ProjectCreation"
            },
            "Open Project": (params) =>{
                browser.click(specific_project_name
                    .replace("$(project_name)", params["name"]));
                browser.waitUntil(() => $(background_div).isVisible() === false);
                return "ProjectMainPage"
            },
            "Project Name": (projectName) =>{
                let replace = specific_project_name.replace('$(project_name)',projectName)
                browser.pause(10000);
                browser.click(replace);
                return "ProjectStoriesPage"
            }
        };
        this.search_elements = {
            "success_delete": (value) => {
                let replace = success_delete_object_sms.replace('$(project_name)', value);
                return browser.find(replace).length;
            },
            "projects_list": (value) => {
                let replace = projects_list.replace('$(project_name)', value);
                return browser.isExisting(replace);
            },
        };
    }
}

module.exports = DashboardProjects;