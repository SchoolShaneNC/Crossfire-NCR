
if (!sessionStorage.getItem("role") && !sessionStorage.getItem("Name")) {
    window.location.href = "ncr-login.html";
}

var currentRole = sessionStorage.getItem("role")
var currentUser = sessionStorage.getItem("Name")


window.addEventListener("load", function(){
    const display = document.getElementById("logout")
    display.innerText = "Logout"

    const userDisplay = document.getElementById("user")
    userDisplay.innerText = currentUser

    let ul = document.getElementById("notification-list")

    if(currentRole == "EN"){
        let enNotif = localStorage.getItem("en-notif")
        ul.innerHTML = enNotif
    }
    if(currentRole == "PA"){
        let paNotif = localStorage.getItem("pa-notif")

        ul.innerHTML = paNotif
    }
})

var adminSidebarBtn = document.getElementById("admin-panel")

adminSidebarBtn.addEventListener("click", function(event){
    if(currentRole != "AD"){
        if (confirm("You are not an Administrator.  Access denied.\n  Would you like to go to the login page?")){
            adminSidebarBtn.setAttribute("href", "ncr-login.html")
        }
        else{
            event.preventDefault()
        }
    }
})