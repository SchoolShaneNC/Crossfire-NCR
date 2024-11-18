
//Save notifications
document.getElementById("qi-save-doc-button")
.addEventListener("click", function(){
    let ncrNumber = document.getElementById("ncrNo").value

    let test = document.createTextNode("Quality inspector saved NCR " + ncrNumber)
    let ul = document.getElementById("notification-list")
    let li = document.createElement("li")

    li.appendChild(test)
    ul.appendChild(li)
})

document.getElementById("engineer-save-doc-button")
.addEventListener("click", function(){
    let ncrNumber = document.getElementById("ncrNo").value

    let test = document.createTextNode("Engineer saved NCR " + ncrNumber)
    let ul = document.getElementById("notification-list")
    let li = document.createElement("li")

    li.appendChild(test)
    ul.appendChild(li)
})


//Submit notifications
document.getElementById("qi-submit-doc-button")
.addEventListener("click", function(){
    let ncrNumber = document.getElementById("ncrNo").value

    let test = document.createTextNode("NCR " + ncrNumber + "Quality Inspector Section completed")
    let ul = document.getElementById("notification-list")
    let li = document.createElement("li")

    li.appendChild(test)
    ul.appendChild(li)
})

document.getElementById("engineer-submit-doc-button")
.addEventListener("click", function(){
    let ncrNumber = document.getElementById("ncrNo").value

    let test = document.createTextNode("NCR " + ncrNumber + "Engineer Section completed")
    let ul = document.getElementById("notification-list")
    let li = document.createElement("li")

    li.appendChild(test)
    ul.appendChild(li)
})


//Edit notifications
document.getElementById("engineer-change-doc-button")
.addEventListener("click", function(){
    let ncrNumber = document.getElementById("ncrNo").value

    let test = document.createTextNode("NCR " + ncrNumber + "had changes made by Engineer")
    let ul = document.getElementById("notification-list")
    let li = document.createElement("li")

    li.appendChild(test)
    ul.appendChild(li)
})

document.getElementById("qi-change-doc-button")
.addEventListener("click", function(){
    let ncrNumber = document.getElementById("ncrNo").value

    let test = document.createTextNode("NCR " + ncrNumber + "had changes made by Quality Inspector")
    let ul = document.getElementById("notification-list")
    let li = document.createElement("li")

    li.appendChild(test)
    ul.appendChild(li)
})
