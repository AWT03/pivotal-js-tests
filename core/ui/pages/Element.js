class Element{

    constructor(){
    }

    static do_click(selector){
        browser.click(selector)
    }

    static set_value(selector, value){
        browser.setValue(selector,value)
    }

}
module.exports = Element;