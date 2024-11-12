document.getElementById("submit-doc-button")
    .addEventListener("click", function(){
        let test = document.createTextNode("Saved a Document")
        let ul = document.getElementById("notification-list")
        let li = document.createElement("li")

        li.appendChild(test)
        ul.appendChild(li)
    
        document.getElementById("bell-icon").style.animation="bell-update 500ms linear 3"
    })
