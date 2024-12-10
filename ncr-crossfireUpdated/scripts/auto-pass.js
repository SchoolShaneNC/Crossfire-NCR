id = 0

document.getElementById("logins-autofill").addEventListener("click", function(){
    if(id == 0){
        document.getElementById("loginName").value = "Shane Milton"
        document.getElementById("loginPass").value = "shane"
        id++
        return;
    }
    if(id == 1){
        document.getElementById("loginName").value = "Mikhail Marsh"
        document.getElementById("loginPass").value = "mikhail"
        id++
        return;
    }
    if(id == 2){
        document.getElementById("loginName").value = "Connor Foy"
        document.getElementById("loginPass").value = "connor"
        id++
        return;
    }
    if(id == 3){
        document.getElementById("loginName").value = "Zach Milton"
        document.getElementById("loginPass").value = "zach"
        id++
        return;
    }
    if(id == 4){
        document.getElementById("loginName").value = "Lucas Peacock"
        document.getElementById("loginPass").value = "lucas"
        id = 0
        return;
    }
})

