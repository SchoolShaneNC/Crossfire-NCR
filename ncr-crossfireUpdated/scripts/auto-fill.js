document.getElementById("qi-auto-fill").addEventListener("click", function(){
    document.getElementById("wip").checked = true
    document.getElementById("poProdNo").value = "182930485903"
    document.getElementById("salesOrderNo").value = "3782"
    document.getElementById("quantityReceived").value = "300"
    document.getElementById("quantityDefective").value = "50"
    document.getElementById("itemDescription").value = "Iron plated screwbolts."
    document.getElementById("itemDefect").value = "Defective bolts were rusted."
    document.getElementById("qi-yes").checked = true
})

document.getElementById("eng-auto-fill").addEventListener("click", function(){
    let disposition = document.getElementById("eng-disposition")

    document.getElementById("use-as-is").checked = true
    disposition.value = ""
    disposition.disabled = true
    document.getElementById("notifYes").checked = true
    document.getElementById("updYes").checked = true
    document.getElementById("org-rev-name").value = "Henry Mace"
    document.getElementById("org-rev-num").value = "28933"
    document.getElementById("upd-rev-num").value = "34952"
})

document.getElementById("pa-auto-fill").addEventListener("click", function(){
    let carType = document.getElementById("car-type")

    document.getElementById("car-num").value= "128394"
    carType.value = ""
    carType.disabled = true
    document.getElementById("car-date").disabled = true
    document.getElementById("follow-no").checked = true
    document.getElementById("updYes").checked = true
    document.getElementById("op-name").value = "Cindy LaConte"
    document.getElementById("inspector-name").value = "Anthony Wake"
    document.getElementById("quality-name").value = "Greg Fontaine"
})