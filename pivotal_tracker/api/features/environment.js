require('module-alias/register');
const {DeleteObjects} = require(`@pivotal_utils/PivotalUtils.js`);
const {BeforeAll, AfterAll, After} = require('cucumber');
const {ReadJsonFromFile} = require(`@core_utils/Common.js`);
const PivotalTrackerDir = require(`@pivotal/PivotalTrackerDir.js`);
let account_id = ReadJsonFromFile(PivotalTrackerDir+'/config.json')["accounts"].api.id;


BeforeAll(async function () {
    await DeleteObjects('owner', 'project', parseInt(account_id));
});

AfterAll(async function () {
    await DeleteObjects('owner', 'project', parseInt(account_id));
});

After(async function () {
    await DeleteObjects('owner', 'project', parseInt(account_id));
});