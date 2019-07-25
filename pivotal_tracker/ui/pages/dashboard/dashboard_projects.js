require('module-alias/register');
const Many = require('extends-classes')
const FormPage = require('@core_ui/pages/form_page.js');
const ActionPage = require('@core_ui/pages/action_page.js');
const UserPage = require('@pivotal_ui/pages/user_page.js');


class DashboardProjects extends Many(FormPage, ActionPage){

    constructor(){
        super();
        this.search_elements = {
            
        }
    }
}