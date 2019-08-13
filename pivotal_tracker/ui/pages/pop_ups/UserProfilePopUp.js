require('module-alias/register');
const ActionPage = require(`@core_ui/pages/ActionPage.js`);

let header_profile_dropdown_signout = 'button[data-aid="ProfileDropdown__signout"]';
let header_profile_dropdown_profile = 'a[data-aid="ProfileDropdown__profile"]';
let login_different_account = 'a[data-aid="different_account_link"]';

class UserProfilePopUp extends ActionPage{

    constructor(){
        super();
        this.actions = {
            "Sign Out":  () => {
                browser.click(header_profile_dropdown_signout);
            },
            "Login Different Account":  () => {
                browser.click(login_different_account);
            },
            "Profile":  () => {
                browser.click(header_profile_dropdown_profile);
                return "Profile";
            }
        }
    }
}

module.exports = UserProfilePopUp;