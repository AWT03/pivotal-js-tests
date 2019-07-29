require('module-alias/register');
const Many = require('extends-classes');
const FormPage = require('@core_ui/pages/FormPage.js');
const ActionPage = require('@core_ui/pages/ActionPage.js');


let add_story_backlog = 'div[id*="panel_backlog"] a[class*="FirstStoryAddButton"]';
let story_title = 'textarea[name*="story"]';
let save_button = 'button[class*="autosaves button"]';
let cancel_button = 'button[class*="autosaves cancel"]';
let add_task = 'div[data-aid*="Tasks"] span[class*="AddSubresourceButton__message"]';
let task_title = 'textarea[placeholder*="Add a task"]';
let add_button = 'button[data-aid*="addTaskButton"]';


class StoriesBacklog extends Many(FormPage, ActionPage){

    constructor(){
        super();
        this.actions = {
            "Add Story": () => {
                browser.click(add_story_backlog);
            },
            "Save": () => {
                browser.click(save_button);
            },
            "Cancel": () => {
                browser.click(cancel_button);
            },
            "Adda Task": () => {
                browser.click(add_task);
            },
            "Add": () => {
                browser.click(add_button);
            },
            "Task": () => {
                browser.click(add_task);
            },
            "story_creation": (value) => {
                browser.setValue(story_title, value);
            },
            "task_creation": () => {
                this.setTask();
            }
        }
        this.fields = {
            "story_title": (value) => {
                browser.setValue(story_title, value);
            },
            "task_title": (value) => {
                this.setTask(value);
            }
        }
        this.updateFormFields(this.fields);
        this.updateActions(this.actions);
    }

    setTask(value){
        browser.click(add_task);
        browser.setValue(task_title, value);
        browser.click(add_button);
    }

}
module.exports = StoriesBacklog;