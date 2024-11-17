document.getElementById("save-doc-button")
.addEventListener("click", function(){
    let ncrNumber = document.getElementById("ncrNo").value

    let test = document.createTextNode("NCR "+ncrNumber+" has been saved")
    let ul = document.getElementById("notification-list")
    let li = document.createElement("li")

    li.appendChild(test)
    ul.appendChild(li)
})