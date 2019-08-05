require('module-alias/register');

class ActionPage {
    constructor() {
        this.actions = {
            };
    }

    updateActions(actions){
        this.actions = Object.assign(this.actions, actions)
    }

    doAction(action, params){
        if(action in this.actions)
            return this.actions[action](params);
    }
}

module.exports = ActionPage;
