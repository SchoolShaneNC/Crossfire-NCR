import { QIEmail } from "./autoEmail.js"


window.onload = (e) => {
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
    }

    //Save notifications
    function eventListener() {
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

        //Submit notifications
        document.getElementById("qi-submit-doc-button")
            .addEventListener("click", function(event){
                event.preventDefault();
                let ncrNumber = document.getElementById("ncrNo").value
                let name = document.getElementById("qualityRepName").value

                let test = document.createTextNode("NCR " + ncrNumber + "Quality Inspector Section completed")
                let ul = document.getElementById("notification-list")
                let li = document.createElement("li")

                li.appendChild(test)
                ul.appendChild(li)

                let message = "Email sent to Engineer"

                QIEmail(message, ncrNumber, name)

         })
        
        document.getElementById("engineer-submit-doc-button")
            .addEventListener("click", function(event){
                event.preventDefault();    
                let ncrNumber = document.getElementById("ncrNo").value
                let name = document.getElementById("engName").value

                let test = document.createTextNode("NCR " + ncrNumber + "Engineer Section completed")
                let ul = document.getElementById("notification-list")
                let li = document.createElement("li")

                li.appendChild(test)
                ul.appendChild(li)

                let message = "Email sent to procurement"
        
                QIEmail(message, ncrNumber, name)
         })
    }

// //Edit notifications
// document.addEventListener('DOMContentLoaded', function() {
// document.getElementById("engineer-change-doc-button")
// .addEventListener("click", function(){
//     let ncrNumber = document.getElementById("ncrNo").value

//     let test = document.createTextNode("NCR " + ncrNumber + "had changes made by Engineer")
//     let ul = document.getElementById("notification-list")
//     let li = document.createElement("li")

//     li.appendChild(test)
//     ul.appendChild(li)
// })
// });

// document.addEventListener('DOMContentLoaded', function() {
// document.getElementById("qi-change-doc-button")
// .addEventListener("click", function(){
//     let ncrNumber = document.getElementById("ncrNo").value

//     let test = document.createTextNode("NCR " + ncrNumber + "had changes made by Quality Inspector")
//     let ul = document.getElementById("notification-list")
//     let li = document.createElement("li")

//     li.appendChild(test)
//     ul.appendChild(li)
// })
// });
