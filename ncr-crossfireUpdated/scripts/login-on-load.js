
if (!sessionStorage.getItem("role") && !sessionStorage.getItem("Name")) {
    window.location.href = "ncr-login.html";
}

var currentRole = sessionStorage.getItem("role")
var currentUser = sessionStorage.getItem("Name")


window.addEventListener("load", function(){
    const display = document.getElementById("currentRole")
    display.innerText = currentRole
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