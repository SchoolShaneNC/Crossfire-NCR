//EN
function EngNotificationAdd(){
    let ncrNumber = document.getElementById("ncrNo").value
    let qiFormAnchor = document.createElement('<a href="editNcrLog.html">Quality Inspector completed NCR Document '+ ncrNumber +'<a>')
    
    let li = document.createElement("li")
    let ul = document.getElementById("notification-list")

    li.appendChild(qiFormAnchor)
    ul.appendChild(li)



    localStorage.setItem("en-notif", ul)
}


