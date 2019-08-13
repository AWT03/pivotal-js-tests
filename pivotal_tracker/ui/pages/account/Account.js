require('module-alias/register');
const ActionPage = require(`@core_ui/pages/ActionPage.js`);

let ref_create_project = 'a[onclick*="$(account_name)"]'

class Account extends ActionPage{

    constructor(){
        super();
        this.actions = {
            "Create Project":  (account_name) => {
                let replace = ref_create_project.replace('$(account_name)',account_name);
                browser.click(replace);
                return "ProjectCreation";
            }
        }
    }
}

module.exports = Account;