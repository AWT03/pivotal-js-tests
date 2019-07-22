/**
 *
 * @param url {string} the main url of the application
 * @constructor
 */
function SetupMainUrl(url){
    browser.url(url);
}

module.exports = {
    SetupMainUrl
};
