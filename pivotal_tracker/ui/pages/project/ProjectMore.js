require('module-alias/register');
const Many = require('extends-classes');
const FormPage = require(`@core_ui/pages/FormPage.js`);
const ActionPage = require(`@core_ui/pages/ActionPage.js`);

let project_name_field = '#project_name';
let project_description_field = '#project_description';
let delete_selector = '//a[text()="Delete"]'
let delete_submit = '#confirm_delete'
let save_button = 'input.save_bar__submit'
let edit_saved_changes_sms = '//div[@id="save_success_bar"]//following-sibling::div[1][text()="$(message)"]'
let sms_map = {
    "changes_saved": "Changes saved."
}


class ProjectMore extends Many(ActionPage, FormPage) {

    constructor() {
        super();
        this.formFields = {
            "project_name": (value) => {
                browser.setValue(project_name_field, value);
            },
            "description": (value) => {
                browser.setValue(project_description_field, value);
            }
        };
        this.actions = {
            "Delete": () => {
                browser.pause(5000);
                browser.scroll(delete_selector, 0, 1800);
                browser.click(delete_selector);
                browser.pause(5000);
                browser.click(delete_submit);
                return "DashboardOnly";
            },
            "Save": () => {
                browser.pause(5000);
                browser.click(save_button);
                browser.pause(5000);
                browser.alertAccept();
            }
        }
    }

    verifySaveMesage(message) {
        let replace = edit_saved_changes_sms.replace("$(message)", sms_map[message])
        let is_visible = $(replace).isVisible();
        return is_visible;
    }
}

module.exports = ProjectMore;