require('module-alias/register');
const {DeleteObjects} = require(`@pivotal_utils/PivotalUtils.js`);
const {BeforeAll, AfterAll, After} = require('cucumber');


BeforeAll(async function () {
    await DeleteObjects('owner', 'project');
});

AfterAll(async function () {
    await DeleteObjects('owner', 'project');
});

After(async function () {
    await DeleteObjects('owner', 'project');
});