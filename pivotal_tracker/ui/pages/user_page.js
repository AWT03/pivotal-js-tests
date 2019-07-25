require('module-alias/register');
const Many = require('extends-classes');
const TabPage = require('@core_ui/pages/tab_page.js');
const ElementSearch = require('@core_ui/pages/element_search.js');
const DashboardPage = require('@pivotal_ui/pages/dashboard/dash.js');
/*const ProjectMain = require('@pivotal_ui/pages/project_view/project_main_page.js');
const ProjectAll = require('@pivotal_ui/pages/project_all_page.js');
const ProjectCreationForm = require('@pivotal_ui/pages/project_creation_form.js');*/

let go_dashboard_button = '.headerLogo__image';
let projects_dropdown_list = '.tc_projects_dropdown_link.tc_context_name';
let header_name = '//span[text()="$(expected_name)"]';
let header_privacy = '//span[text()="($(privacy))"]';
let show_all_projects_button = '//span[text()="Show All Projects"]';

class UserPage extends Many(TabPage, ElementSearch){

    constructor(){
        super();
        this.search_elements = {
            "header_name": (name) => {
                this.validateHeaderName(name)
            },
            "header_privacy": (privacy) => {
                this.validateHeaderPrivacy(privacy)

            }
        }
        this.tabs = {
            "Dashboard": () => {
                this.getDashboardTab();
            },
            "ProjectMain": () => {
                this.getProjectMainTab();
            },
            "AllProjects": () => {
                this.getAllProjects();
            },
            "ProjectCreation": () => {
                this.getProjectCreationForm();
            }
        }
        //this.tab = DashboardPage;

    }

    getDashboardTab(){
        //browser.click(go_dashboard_button);
        //this.tab = DashboardPage;
    }

    getProjectMainTab(){
        //this.tab = ProjectMain;
    }

    getAllProjects(){
        //browser.click(projects_dropdown_list);
        //browser.click(show_all_projects_button);
        //this.tab = ProjectAll;
    }

    getProjectCreationForm(){
        //this.tab = ProjectCreationForm;
    }

    validateHeaderName(){
        return browser.isExisting(header_name.replace('$(expected_name)', name))
    }

    validateHeaderPrivacy(){
        return browser.isExisting(header_privacy.replace('$(privacy)', privacy))
    }
}

module.exports = UserPage;