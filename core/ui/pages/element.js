class Element{

    constructor(){
    }

    find_element(selector){
        return browser.element(selector)
    }

    do_click(selector){
        browser.click(selector)
    }

    set_value(selector, value){
        browser.setValue(selector,value)
    }

}