require('module-alias/register');
const Many = require('extends-classes');
const FormPage = require(`@core_ui/pages/FormPage.js`);
const ActionPage = require(`@core_ui/pages/ActionPage.js`);

let story_title = 'textarea[name*="story"]'
let save_button = 'button[class*="autosaves button"]'


class StoryBacklog extends Many(FormPage, ActionPage){

    constructor(){
        super();
        this.formFields = {
            "story_title":  (value) => {
                browser.setValue(story_title, value);
            }
        };
        this.actions = {
            "Save":  () => {
                browser.click(save_button);
                return "ProjectStoriesPage";
            }
        }
    }
}

module.exports = StoryBacklog;