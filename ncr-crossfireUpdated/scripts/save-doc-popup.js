//import { QIEmail } from "./autoEmail.js"


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

//Quality inspector submit validation
document.getElementById("qi-change-doc-button").addEventListener("click", function(){
    let poProdNum = document.getElementById("poProdNo").value
    let dangerProdNum = document.getElementById("danger-prod-num")

    if(poProdNum != ""){
        if(!poProdNum.match(/^[0-9]*$/g)){
            dangerProdNum.innerText = "Input only numbers"
            dangerProdNum.style.visibility = "visible"
        }
        else if(poProdNum.length < 12 || poProdNum.length > 12){
            dangerProdNum.innerText = "Input must be 12 digits"
            dangerProdNum.style.visibility = "visible"
        }
        else{
            dangerProdNum.style.visibility = "hidden"
        }
    }
    else{
        dangerProdNum.innerText = "Input a product number"
        dangerProdNum.style.visibility = "visible"
    }
    
    //Sales Order num
    let salesOrdNum = document.getElementById("salesOrderNo").value
    let dangerSalesOrdNum = document.getElementById("danger-sales-ord-num")

    if(salesOrdNum != ""){
        if(!salesOrdNum.match(/^[0-9]*$/g)){
            dangerSalesOrdNum.innerText = "Input only numbers"
            dangerSalesOrdNum.style.visibility = "visible"
        }
        else if(salesOrdNum.length < 4 || salesOrdNum.length > 4){
            dangerSalesOrdNum.innerText = "Input must be 4 digits"
            dangerSalesOrdNum.style.visibility = "visible"
        }
        else{
            dangerSalesOrdNum.style.visibility = "hidden"
        }
    }
    else{
        dangerSalesOrdNum.innerText = "Input a sales order number"
        dangerSalesOrdNum.style.visibility = "visible"
    }

    //QtyReceived
    let qtyReceive = document.getElementById("quantityReceived").value
    let dangerQtyReceive = document.getElementById("danger-qty-receive")

    if(qtyReceive != ""){
        dangerQtyReceive.style.visibility = "hidden"
    }
    else{
        dangerQtyReceive.innerText = "Input quantity of total items"
        dangerQtyReceive.style.visibility = "visible"
    }

    //Quantity defective
    let qtyDefective = document.getElementById("quantityDefective").value
    let dangerQtyDefective = document.getElementById("danger-qty-defective")

    if( qtyDefective != ""){
        dangerQtyDefective.style.visibility = "hidden"
    }
    else{
        dangerQtyDefective.innerText = "Input quantity of defective items"
        dangerQtyDefective.style.visibility = "visible"
    }

    //item description
    let qtyItemDescription = document.getElementById("itemDescription").value
    let dangerItemDescription = document.getElementById("danger-item-description")

    if( qtyItemDescription != ""){
        dangerItemDescription.style.visibility = "hidden"
    }
    else{
        dangerItemDescription.innerText = "Input a description"
        dangerItemDescription.style.visibility = "visible"
    }

    //defect description
    let qtyDefectDescription = document.getElementById("itemDefect").value
    let dangerDefectDescription = document.getElementById("danger-defect-description")

    if( qtyDefectDescription != ""){
        dangerDefectDescription.style.visibility = "hidden"
    }
    else{
        dangerDefectDescription.innerText = "Input a description"
        dangerDefectDescription.style.visibility = "visible"
    }
})


//Engineer submit validation
document.getElementById("engineer-change-doc-button").addEventListener("click", function(){
    
    //Engineer Disposition
    let dispositionTextarea = document.getElementById("eng-disposition")
    let dangerDisposition = document.getElementById("danger-eng-disposition")

    if(dispositionTextarea.disabled != true){
        if(dispositionTextarea.value == ""){
            dangerDisposition.innerText = "Missing description of steps required"
            dangerDisposition.style.visibility = "visible"
        }
        else{
            dangerDisposition.style.visibility = "hidden"
        }
    }
    else{
        dangerDisposition.style.visibility = "hidden"
    }

    let revisionRadio = document.querySelector('input[name=update]:checked').value

    //Original Revision Engineer Name
    let orgRevName= document.getElementById("org-rev-name")
    let dangerOrgRevName = document.getElementById("danger-org-rev-name")

    //Original Revision Engineer Date
    let orgRevDate= document.getElementById("org-rev-date")
    let dangerOrgRevDate = document.getElementById("danger-org-rev-date")

    //Original Revision Engineer Number
    let orgRevNum= document.getElementById("org-rev-num")
    let dangerOrgRevNum = document.getElementById("danger-org-rev-num")

    //Updates Revision Engineer Name
    let updRevName= document.getElementById("upd-rev-name")
    let dangerUpdRevName = document.getElementById("danger-upd-rev-name")

    //Updated Revision Engineer Date
    let updRevDate= document.getElementById("upd-rev-date")
    let dangerUpdRevDate = document.getElementById("danger-upd-rev-date")

    //Updated Revision Engineer Number
    let updRevNum= document.getElementById("upd-rev-num")
    let dangerUpdRevNum = document.getElementById("danger-upd-rev-num")

    if(revisionRadio == "yes"){
        //Original validation
        if(orgRevName.value == ""){
            dangerOrgRevName.innerText = "Input Engineer Name"
            dangerOrgRevName.style.visibility = "visible"
        }
        else{
            dangerOrgRevName.style.visibility = "hidden"
        }

        if(orgRevDate.value == ""){
            dangerOrgRevDate.innerText = "Input Date"
            dangerOrgRevDate.style.visibility = "visible"
        }
        else{
            dangerOrgRevDate.style.visibility = "hidden"
        }

        if(orgRevNum.value == ""){
            
            dangerOrgRevNum.innerText = "Input original revision number"
            dangerOrgRevNum.style.visibility = "visible"
        }
        else{
            dangerOrgRevNum.style.visibility = "hidden"     
        }

        //Updated validation
        if(updRevName.value == ""){
            dangerUpdRevName.innerText = "Input Engineer Name"
            dangerUpdRevName.style.visibility = "visible"
        }
        else{
            dangerUpdRevName.style.visibility = "hidden"
        }

        if(updRevDate.value == ""){
            dangerUpdRevDate.innerText = "Input Date"
            dangerUpdRevDate.style.visibility = "visible"
        }
        else{
            dangerUpdRevDate.style.visibility = "hidden"
        }

        if(updRevNum.value == ""){
            dangerUpdRevNum.innerText = "Input updated revision number"
            dangerUpdRevNum.style.visibility = "visible"        
            
        }
        else{
            dangerUpdRevNum.style.visibility = "hidden"
        }
    }
    else{
        //original
        dangerOrgRevName.style.visibility = "hidden"       
        dangerOrgRevDate.style.visibility = "hidden"
        dangerOrgRevNum.style.visibility = "hidden"

        //update
        dangerUpdRevName.style.visibility = "hidden"
        dangerUpdRevDate.style.visibility = "hidden"
        dangerUpdRevNum.style.visibility = "hidden"
    }
})


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
