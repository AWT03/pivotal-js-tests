require('module-alias/register');
const {DeleteObjects} = require(`@pivotal_utils/PivotalUtils.js`);
const {BeforeAll, AfterAll} = require('cucumber');


BeforeAll(async function () {
    await DeleteObjects('owner', 'project');
});

AfterAll(async function () {
    await DeleteObjects('owner', 'project');
});
