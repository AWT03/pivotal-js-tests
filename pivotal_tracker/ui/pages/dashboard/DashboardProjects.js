require('module-alias/register');
const Many = require('extends-classes');
const ElementSearch = require(`@core_ui/pages/ElementSearch.js`);
const ActionPage = require(`@core_ui/pages/ActionPage.js`);

let create_project_button = 'button[id="create-project-button"]';

class DashboardProjects extends Many(ElementSearch, ActionPage){

    constructor(){
        super();
        this.search_elements = {
        };
        this.actions = {
            "Create Project": () => {
                DashboardProjects.openCreateProjectForm();
            }
        };
        this.updateActions(this.actions);
        this.updateSearchFields(this.search_elements);
    }


    static openCreateProjectForm(){
        this.do_click(create_project_button);
        return "ProjectCreation";
    }

}

module.exports = DashboardProjects;