document.getElementById("qi-save-doc-button").addEventListener("click", saveLog)
document.getElementById("addComp").addEventListener("click", addComp)



function saveLog(){
    


}

function addComp(){
 x = document.getElementById("supplierName").textContent 

 y = document.getElementById("comboBox").value
 for (x of comboBox){
    if (x.value == y){
       let z = x.textContent;
        document.getElementById("supplierName").value = z;

        console.log(z);

    }

 }


}