require('module-alias/register');
const Many = require('extends-classes')
const TabPage = require('@core_ui/pages/tab_page.js');
const ElementSearch = require('@core_ui/pages/element_search.js');
const DashboardPage = require('@pivotal_ui/pages/dashboard_page.js');
const ProjectMain = require('@pivotal_ui/pages/project_main_page.js');
const ProjectAll = require('@pivotal_ui/pages/project_all_page.js');
const ProjectCreationForm = require('@pivotal_ui/pages/project_creation_form.js');

let go_dashboard_button = '.headerLogo__image'
let projects_dropdown_list = '.tc_projects_dropdown_link.tc_context_name'
let header_name = '//span[text()="$(expected_name)"]'
let header_privacy = '//span[text()="($(privacy))"]'
let show_all_projects_button = '//span[text()="Show All Projects"]'

class UserPage extends Many(TabPage, ElementSearch){
    constructor(){
        super();
        this.search_elements = {
            "header_name": (name) => {
                this.validate_header_name(name)
            },
            "header_privacy": (username) => {
                this.validate_header_privacy(username)

            }
        }
        this.tabs = {
            "Dashboard": () => {
                return this.get_dashboard_tab();
            },
            "ProjectMain": () => {
                return this.get_project_main_tab();
            },
            "AllProjects": () => {
                return this.get_all_projects();
            },
            "ProjectCreation": () => {
                return this.get_project_creation_form();
            }
        }
        this.tab = new DashboardPage;

    }

    get_dashboard_tab(){
        browser.click(go_dashboard_button);
        this.tab = DashboardPage;
    }

    get_project_main_tab(){
        this.tab = ProjectMain;
    }

    get_all_projects(){
        browser.click(projects_dropdown_list)
        browser.click(show_all_projects_button)
        this.tab = ProjectAll;
    }

    get_project_creation_form(){
        this.tab = ProjectCreationForm;
    }

    validate_header_name(){
        return browser.isExisting(header_name.replace('$(expected_name)', name))
    }

    validate_header_privacy(){
        return browser.isExisting(header_privacy.replace('$(privacy)', privacy))
    }
}

exports.module = UserPage;