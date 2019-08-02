require('module-alias/register');

class ActionPage {
    constructor() {
        this.actions = {
            };
    }

    updateActions(actions){
        this.actions = Object.assign(this.actions, actions)
    }

    doAction(action){
        if(action in this.actions)
            return this.actions[action]();
    }
}

module.exports = ActionPage;
