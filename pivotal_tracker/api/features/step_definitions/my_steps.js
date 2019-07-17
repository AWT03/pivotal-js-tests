require('module-alias/register');
const {Given, When, Then} = require('cucumber');
const assert = require('assert');
const {ReadJsonFromFile, DataTableToJson, DataTableToJsonList, JsonContains, JsonSchemaValidator} =
    require(`@core_utils/Common.js`);
const {FormatString} = require(`@pivotal_utils/PivotalUtils.js`);
const PivotalTrackerApi = require(`@pivotal_api/PivotalTrackerApi.js`);
const PivotalSchemasDir = require(`@pivotal_schemas/PivotalSchemasDir.js`);

Given('I start a connection with the Pivotal Tracker API', () => {
    this.api = new PivotalTrackerApi();
    this.headers = {};
    this.last_data = {};
    this.already_existing = 0;
    this.context_ids = [''];
    assert.strictEqual(true, true);
});

Given('I log in as {word}', (user_id) => {
    this.headers = this.api.config["headers"];
    this.headers["X-TrackerToken"] = this.api.config["user"][user_id]["token"];
    assert.strictEqual(true, true)
});

Given('I save the id after sending a {word} request to {word} with data:',
    async (http_type, endpoint, table) => {
        this.last_data = FormatString(JSON.stringify(DataTableToJson(table)));
        await this.api.build_end_point(endpoint, this.context_ids);
        await this.api.do_request(http_type, this.last_data, this.headers, {});
        if (http_type === 'POST'){
            this.context_ids.splice(this.context_ids.length-1, 0,
                JSON.parse(this.api.full_response)["id"].toString());
        }
        await assert.strictEqual(true, true);
});

When('I send a {word} request to {word} with data:', async (http_type, endpoint, table) => {
    this.last_data = FormatString(JSON.stringify(DataTableToJson(table)));
    await this.api.build_end_point(endpoint, this.context_ids);
    await this.api.do_request(http_type, this.last_data, this.headers, {});
    if (http_type === 'GET'){
        this.context_ids[this.context_ids.length-1] = JSON.parse(this.api.full_response)["id"].toString()
    }
    await assert.strictEqual(true, true);
});

When('I send several {word} requests to {word} with data:', async(http_type, endpoint, table) => {
    let data_list = await DataTableToJsonList(table);
    await this.api.build_end_point(endpoint, this.context_ids);
    for (let row = 0; row < data_list.length; row++){
        this.last_data = FormatString(JSON.stringify(data_list[row]));
        await this.api.do_request(http_type, this.last_data, this.headers, {});
    }
    await assert.strictEqual(true, true);
});

When('I send a {word} request to {word}', async (http_type, endpoint) => {
    await this.api.build_end_point(endpoint, this.context_ids);
    await this.api.do_request(http_type, null, this.headers, {});
    await assert.strictEqual(true, true);
});

When('I count the already existing {word}', async (endpoint) => {
    await this.api.build_end_point(endpoint, this.context_ids);
    await this.api.do_request('GET', null, this.headers, {});
    this.already_existing = JSON.parse(this.api.full_response).length;
    await assert.strictEqual(true, true);
});

Then('I expect the status code is {int}', (status_code) => {
    assert.strictEqual(this.api.status_code, status_code);
});

Then('I expect the single response contains last data sent', () => {
    assert.strictEqual(JsonContains(this.api.full_response, this.last_data), true);
});

Then('I expect the response is a list that contains {int} new {word}', async (obj_number, endpoint) => {
    await this.api.build_end_point(endpoint, this.context_ids);
    await this.api.do_request('GET', null, this.headers, {});
    await assert.strictEqual(JSON.parse(
        this.api.full_response).length - this.already_existing, obj_number);
});

Then('I expect the schema is valid with {word}', (schema_name) => {
    assert.strictEqual(JsonSchemaValidator(
        ReadJsonFromFile(require('path').join(PivotalSchemasDir, schema_name+'.json')),
        JSON.parse(this.api.full_response)
    ), true);
});
