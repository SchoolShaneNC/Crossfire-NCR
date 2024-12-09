document.addEventListener("DOMContentLoaded", function() {
    Restrict();
});

function Restrict(){

    const quaInspFields = document.querySelectorAll('#qi-form input, #qi-form select, #qi-form textarea,#qi-form button')
    const engFields = document.querySelectorAll('#eng-form input, #eng-form select, #eng-form textarea, #eng-form button')
    const purFields = document.querySelectorAll('#pur-form input, #pur-form select, #pur-form textarea, #pur-form button')

    quaInspFields.forEach(fields =>{
        fields.disabled =true
    })

    engFields.forEach(fields =>{
        fields.disabled =true
    })

    purFields.forEach(fields =>{
        fields.disabled =true
    })

    this.document.getElementById("ncrClose").disabled =false
}

