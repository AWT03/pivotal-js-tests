require('module-alias/register');
const Many = require('extends-classes')
const ElementSearch = require('@core_ui/pages/element_search.js');
const ActionPage = require('@core_ui/pages/action_page.js');
const UserMainTabs = require('@pivotal_ui/pages/user_page.js');

let create_project_button = 'button[id="create-project-button"';
let project_name_reference = '//a[text()="$(project_name)"]';
let projects_header_name = 'a.projectTileHeader__projectName';
let project_counter = '//span[@data-aid = "my-projects-count"]  [text()="$(counter)"]';

class DashboardProjects extends Many(ElementSearch, ActionPage){

    constructor(){
        super();
        this.search_elements = {
            "projects_dashboard": () => {
                return this.projectExists();
            },
            "projects_counter": () => {
                return this.projectCounter();
            }
        }
        this.actions = {
            "Create Project": () => {
                this.openCreateProjectForm();
            }
        }
        this.updateActions(this.actions);
        this.updateSearchFields(this.search_elements);
    }

    openCreateProjectForm(){
        browser.click(create_project_button);
        return "ProjectCreation";
    }

    projectExists(){
        return browser.isExisting(project_name_reference.replace('$(project_name)', name));
    }

    projectCounter(){
        return browser.isExisting(project_counter.replace('$(counter)', counter));
    }
    //numberOfProjects(){

    //}
}

module.exports = DashboardProjects;