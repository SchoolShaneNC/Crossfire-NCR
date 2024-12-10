import { QIEmail } from "./autoEmail.js"


window.addEventListener("load", function(e){
    if(document.getElementById("qi-save-doc-button") === null){
            
        return
    } 
    else if(document.getElementById("engineer-save-doc-button") === null){
        return
    } 
    else if(document.getElementById("qi-submit-doc-button") === null){
        return
    }
    else if(document.getElementById("engineer-submit-doc-button") === null){
        return
    }    
    else {
        console.log("element found")
        eventListener()
            
    };
})


//quality save doc
//qi
document.getElementById("qi-save-doc-button").addEventListener("click", function(){
    let ncrNum = document.getElementById("ncrNo").value
    
    alert("NCR "+ ncrNum + " has been saved returning to log.")
    QiSaveNotification()

    window.location.href = "formView.html"
})
    

//functions found in: submit-validation-functions, notifications-for-roles
//Quality inspector submit validation
document.getElementById("qi-change-doc-button").addEventListener("click", function(){
    QiValidation()

    if(SubmitBoolQI()){
        EngNotificationAdd()
        alert("Submission Complete.  Sending Notification to Engineer.\n\nReturning to log.")

        window.location.href ="formView.html"
    }
    else{
        alert("Submission Failed.  Invalid Entries present.")
    }
})

//Engineer submit validation
document.getElementById("engineer-change-doc-button").addEventListener("click", function(){
    EnValidation()
    
    if(SubmitBoolEN()){
        PaNotificationAdd()
        alert("Submission Complete.  Sending Notification to Purchasing Agent.\n\nReturning to log.")
        window.location.href ="formView.html"
    }
    else{
        alert("Submission Failed.  Invalid Entries present.")
    }
})

//Puchasing submit validation
document.getElementById("purchasing-change-doc-button").addEventListener("click", function(){ 
    PaValidation()

    if(SubmitBoolPA()){
        alert("Submission Complete.  Document is now Closed.\n\nReturning to log.")
        window.location.href ="formView.html"
    }
    else{
        alert("Submission Failed.  Invalid Entries present.")
    }
})


//eng
document.getElementById("engineer-save-doc-button").addEventListener("click", function(){
    let ncrNum = document.getElementById("ncrNo").value
    
    alert("NCR "+ ncrNum + " has been saved returning to log.")
    EnSaveNotification()

    window.location.href = "formView.html"
})

//pa
document.getElementById("purchasing-save-doc-button").addEventListener("click", function(){
    let ncrNum = document.getElementById("ncrNo").value
    
    alert("NCR "+ ncrNum + " has been saved returning to log.")
    PaSaveNotification()

    window.location.href = "formView.html"
})



function eventListener() {
    //Save notifications
    document.getElementById("qi-save-doc-button")
    .addEventListener("click", function(event){
        event.preventDefault();
        let ncrNumber = document.getElementById("ncrNo").value
        let name = document.getElementById("qualityRepName").value
        let test = document.createTextNode("Quality inspector saved NCR " + ncrNumber)
        let ul = document.getElementById("notification-list")
        let li = document.createElement("li")
    
        li.appendChild(test)
        ul.appendChild(li)
        let message = "Email sent to Engineer"
    
        QIEmail(message, ncrNumber, name)

        alert()
    })
    document.getElementById("engineer-save-doc-button")
    .addEventListener("click", function(event){
        event.preventDefault();
        let ncrNumber = document.getElementById("ncrNo").value
        let name = document.getElementById("engName").value

        let test = document.createTextNode("Engineer saved NCR " + ncrNumber)
        let ul = document.getElementById("notification-list")
        let li = document.createElement("li")

        li.appendChild(test)
        ul.appendChild(li)
        let message = "Email sent to procurement"
    
        QIEmail(message, ncrNumber, name)
    })

/*     //procurement notifications?
    document.getElementById("procurement-change-doc-button")
    .addEventListener("click", function(event){
        event.preventDefault(); 
        let ncrNumber = document.getElementById("ncrNo").value
   
        let test = document.createTextNode("NCR " + ncrNumber + "had changes made by Engineer")
        let ul = document.getElementById("notification-list")
        let li = document.createElement("li")
   
        li.appendChild(test)
        ul.appendChild(li)
    })
    
     document.getElementById("procurement-change-doc-button")
 .addEventListener("click", function(event){
    event.preventDefault(); 
     let ncrNumber = document.getElementById("ncrNo").value

     let test = document.createTextNode("NCR " + ncrNumber + "had changes made by Quality Inspector")
     let ul = document.getElementById("notification-list")
     let li = document.createElement("li")

     li.appendChild(test)
     ul.appendChild(li)
 }) */
}







