/*var save = document.getElementById("save-doc-button");

save.addEventListener("click", function(){
    alert("byee");
})*/

document.getElementById("save-doc-button")
.addEventListener("click", function(){
    let test = document.createTextNode("Quality Inspector submitted a new Document")
    let ul = document.getElementById("notification-list")
    let li = document.createElement("li")

    li.appendChild(test)
    ul.appendChild(li)

    document.getElementById("bell-icon").style.animation="bell-update 500ms linear 3"
})