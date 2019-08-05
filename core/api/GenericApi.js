const request = require('request');

/**
 * Class that can be used for API connection and request
 */
class GenericApi {
    /**
     * Basic attributes to make a request and save the response
     */
    constructor() {
        this.url = "";
        this.full_response = {};
        this.status_code = 0;
    }

    /**
     * This is a reference functions, should be extended to particular needs
     * @param tag {string} What to build on the endpoint
     */
    build_end_point(tag){}


    /**
     * This function will do the request and save the result on the class attributes
     * It return a promise so you can use await when calling the function externally
     * @param http_method {string} one of {POST, GET, PUT, DELETE}
     * @param body {string, object} the body that will be sent to the request
     * depending on content-type it can be a string or an object
     * @param headers {object} the headers that will be used for the request
     * @param params request parameters
     * @returns {Promise<response>} resolve the promise once the request gets a response
     */
    async do_request(http_method, body, headers, params){
        return new Promise((resolve, reject) => {
            request({
                url: this.url,
                method: http_method,
                body: body,
                headers: headers,
                params: params
            }, (error, response, body) => {
                this.full_response = body;
                this.status_code = response.statusCode;
                resolve(response);
            })
        });
    }

}

module.exports = GenericApi;
