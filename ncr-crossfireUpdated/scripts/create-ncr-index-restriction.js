var currentRole = sessionStorage.getItem("role")

var createIndexBtn = document.getElementById("index-create-ncr")
createIndexBtn.addEventListener("click", function(event){
    if(currentRole == "AD" || currentRole == "QI"){

    }
    else{
        if (confirm("You are not an Administrator\n or a Quality Inspector.  Access denied.\n\n  Would you like to go to the login page?")){
            currentRole="N/A"
            event.preventDefault()
            window.location.href = "ncr-login.html"
        }
        else{
            event.preventDefault()
        }
    }
})