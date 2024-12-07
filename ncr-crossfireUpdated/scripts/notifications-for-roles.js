//EN
function EngNotificationAdd(){    
    let ncrNumber = document.getElementById("ncrNo").value
    let qiFormAnchor = document.createElement('a')
    qiFormAnchor.href = "formEdit.html";
    
    let li = document.createElement("li")
    li.textContent = 'Quality Inspector completed NCR Document ' + ncrNumber

    //fetch previous notifications trail
    var currentNotifs
    if(localStorage.length > 0){
        currentNotifs = localStorage.getItem("en-notif")
    }
    let ul = document.getElementById("li-storage")
    ul.innerHTML = currentNotifs
    

    qiFormAnchor.appendChild(li)
    ul.appendChild(qiFormAnchor)
    let notifications = ul.innerHTML

    localStorage.setItem("en-notif", notifications)
}

function PaNotificationAdd(){
    let ncrNumber = document.getElementById("ncrNo").value
    let enFormAnchor = document.createElement('a')
    enFormAnchor.href = "formEdit.html";
    
    let li = document.createElement("li")
    li.textContent = 'Engineer completed NCR Document ' + ncrNumber

    var currentNotifs
    if(localStorage.length > 0){
        currentNotifs = localStorage.getItem("en-notif")
    }
    let ul = document.getElementById("li-storage")
    ul.innerHTML = currentNotifs

    enFormAnchor .appendChild(li)
    ul.appendChild(enFormAnchor )

    let notifications = ul.innerHTML

    localStorage.setItem("pa-notif", notifications)
}
