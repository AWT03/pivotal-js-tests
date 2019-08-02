class Element{

    constructor(){
        this.browser = browser
    }

    find_element(selector){
        return this.browser.element(selector)
    }

    do_click(selector){
        this.browser.click(selector)
    }

    set_value(selector, value){
        this.browser.setValue(selector,value)
    }

}
module.exports = Element;