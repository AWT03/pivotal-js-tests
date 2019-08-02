require('module-alias/register');

class FormPage{

    constructor() {
        this.formFields = {};
    }

    updateFormFields(fields){
        this.formFields = Object.assign(this.formFields, fields)
    }

    setForm(fields) {
        for(let tag in fields){
            if (fields.hasOwnProperty(tag))
                this.formFields[tag](fields[tag])
        }
    }
}

module.exports = FormPage;
