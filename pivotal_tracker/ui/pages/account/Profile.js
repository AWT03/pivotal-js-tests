require('module-alias/register');
const ActionPage = require(`@core_ui/pages/ActionPage.js`);

let profile_accounts = 'a[href="/accounts"]';

class Profile extends ActionPage{

    constructor(){
        super();
        this.actions = {
            "Accounts":  () => {
                browser.click(profile_accounts);
                return "Accounts";
            }
        }
    }
}

module.exports = Profile;