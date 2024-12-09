window.addEventListener("load",function(){
    var currentRole = sessionStorage.getItem("role")

    const quaInspFields = document.querySelectorAll('#qi-form input, #qi-form select, #qi-form textarea,#qi-form button')
    const engFields = document.querySelectorAll('#eng-form input, #eng-form select, #eng-form textarea, #eng-form button')
    const purFields = document.querySelectorAll('#pur-form input, #pur-form select, #pur-form textarea, #pur-form button')

    if(currentRole == "AD"){
        return
    }
    else{
        if(currentRole != "QI"){
            quaInspFields.forEach(fields =>{
                fields.disabled =true
            })
        }
    
        if(currentRole != "EN"){
            engFields.forEach(fields =>{
                fields.disabled =true
            })
        }

        if(currentRole != "PA"){
            purFields.forEach(fields =>{
                fields.disabled =true
            })
        }
    }
})
