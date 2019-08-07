class Element{

    constructor(){
    }

    click(selector){
        browser.waitForVisible(selector);
        browser.click(selector)
    }

    static set_value(selector, value){
        browser.setValue(selector,value)
    }

}
module.exports = Element;