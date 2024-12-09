//On submit
//EN
function EngNotificationAdd(){    
    let ncrNumber = document.getElementById("ncrNo").value
    let qiFormAnchor = document.createElement('a')
    qiFormAnchor.href = "formEdit.html";

    let li = document.createElement("li")
    li.textContent = 'Quality Inspector completed NCR ' + ncrNumber

    //fetch previous notifications trail
    var currentNotifs
    if(localStorage.length > 0){
        currentNotifs = localStorage.getItem("en-notif")
    }
    let ul = document.getElementById("li-storage")
    ul.innerHTML = currentNotifs
    
    //appends to li-storage then sets the items in it to localStorage
    qiFormAnchor.appendChild(li)
    ul.appendChild(qiFormAnchor)
    let notifications = ul.innerHTML


    localStorage.setItem("en-notif", notifications)
}

//PA
function PaNotificationAdd(){
    let ncrNumber = document.getElementById("ncrNo").value
    let enFormAnchor = document.createElement('a')
    enFormAnchor.href = "formEdit.html";
    
    let li = document.createElement("li")
    li.textContent = 'Engineer completed NCR ' + ncrNumber

    var currentNotifs
    if(localStorage.length > 0){
        currentNotifs = localStorage.getItem("pa-notif")
    }
    let ul = document.getElementById("li-storage")
    ul.innerHTML = ""

    enFormAnchor .appendChild(li)
    ul.appendChild(enFormAnchor )

    let notifications = ul.innerHTML

    localStorage.setItem("pa-notif", notifications)
}

//OnSave
//Qi
function QiSaveNotification(){    
    let ncrNumber = document.getElementById("ncrNo").value
    let qiFormAnchor = document.createElement('a')
    qiFormAnchor.href = "formEdit.html";

    let li = document.createElement("li")
    li.textContent = 'NCR ' + ncrNumber + ' was saved'

    //fetch previous notifications trail
    var currentNotifs
    if(localStorage.length > 0){
        currentNotifs = localStorage.getItem("qi-notif")
    }
    let ul = document.getElementById("li-storage")
    ul.innerHTML = currentNotifs
    
    //appends to li-storage then sets the items in it to localStorage
    qiFormAnchor.appendChild(li)
    ul.appendChild(qiFormAnchor)

    let notifications = ul.innerHTML
    localStorage.setItem("qi-notif", notifications)
}

//EN
function EnSaveNotification(){
    let ncrNumber = document.getElementById("ncrNo").value
    let qiFormAnchor = document.createElement('a')
    qiFormAnchor.href = "formEdit.html";

    let li = document.createElement("li")
    li.textContent = 'NCR ' + ncrNumber + ' was saved'

    //fetch previous notifications trail
    var currentNotifs
    if(localStorage.length > 0){
        currentNotifs = localStorage.getItem("en-notif")
    }
    let ul = document.getElementById("li-storage")
    ul.innerHTML = currentNotifs
    
    //appends to li-storage then sets the items in it to localStorage
    qiFormAnchor.appendChild(li)
    ul.appendChild(qiFormAnchor)

    let notifications = ul.innerHTML
    localStorage.setItem("en-notif", notifications)
}

//PA
function PaSaveNotification(){
    let ncrNumber = document.getElementById("ncrNo").value
    let qiFormAnchor = document.createElement('a')
    qiFormAnchor.href = "formEdit.html";

    let li = document.createElement("li")
    li.textContent = 'NCR ' + ncrNumber + ' was saved'

    //fetch previous notifications trail
    var currentNotifs
    if(localStorage.length > 0){
        currentNotifs = localStorage.getItem("pa-notif")
    }
    let ul = document.getElementById("li-storage")
    ul.innerHTML = currentNotifs
    
    //appends to li-storage then sets the items in it to localStorage
    qiFormAnchor.appendChild(li)
    ul.appendChild(qiFormAnchor)

    let notifications = ul.innerHTML
    localStorage.setItem("pa-notif", notifications)
}