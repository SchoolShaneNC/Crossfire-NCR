//once verything is loaded and js reconizes then it runs the function
document.addEventListener("DOMContentLoaded", function() {
    ncrNumGenertator();
});

function ncrNumGenertator()
{
    //pulling the table data (ncrNum cell only) from the local storage and reparsing it back to an object, big long string if dont
    //putting the json object into an array to access
    const tableData = localStorage.getItem('tableData');
    const tableData3 = JSON.parse(tableData);
    let tableDataArr = [];
    tableDataArr = tableData3;

    const theDate = new Date()  //getting the year and an empty array to push filtered data into 
    let theYear = theDate.getFullYear();
    const ncrNumArry = [];
    const newTable = (tableDataArr.filter(x => x.NcrNum.substring(0,4) == theYear)) //filter if year matches then adds the key values into the empty array 
    for (let x of newTable){
        ncrNumArry.push(x.NcrNum);
    }
    newNum = parseInt(ncrNumArry.sort().at(ncrNumArry.length - 1).substring(5)) + 1;//parse the filtered new array, sorts so the biggest num is always at the botton if new logs get added
    newNum = (theYear + "-" + newNum.toString().padStart(3,'0'));     //takes last 3 digits of last item adds 1 then puts that into the final string, padstart makes sure it fills the 3 end digits with 0s if needed
    document.getElementById("ncrNo").value = newNum;
}

//Radio button interactions
document.getElementById("revision-radio").addEventListener("change", function(e){
    let target = e.target

    if(target.value == "no"){
        document.getElementById("org-rev-num").disabled=true
        document.getElementById("upd-rev-num").disabled=true
        document.getElementById("org-rev-num").required=false
        document.getElementById("upd-rev-num").required=false
        document.getElementById("org-rev-num").value = ""
        document.getElementById("upd-rev-num").value = ""
    }
    if(target.value == "yes"){
        document.getElementById("org-rev-num").disabled=false
        document.getElementById("upd-rev-num").disabled=false
        document.getElementById("eng-disposition").required = true
        document.getElementById("eng-disposition").required = true
    }  
})

document.getElementById("disposition-radio").addEventListener("change", function(e){
    let target = e.target

    if(target.value == "repair" || target.value == "rework"){
        document.getElementById("eng-disposition").disabled=true
        document.getElementById("eng-disposition").value = ""
        document.getElementById("eng-disposition").required = false
    }
    else{
        document.getElementById("eng-disposition").disabled=false
        document.getElementById("eng-disposition").required = true
    }
})

/*

this can do the same if you have access to the actual table might be useful later so i kept it 
    table = document.getElementById("ncrTable");
    tr = table.getElementsByTagName("tr");
    td = table.getElementsByTagName("td");
    
    for (var i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td){
            numValue = tr[i].cells[0].textContent.substring(0,4);
            if (numValue == theYear) {
                ncrNumArry.push(tr[i].cells[0].textContent.substring(5));
            }
        }
    }
        */
   // y = (ncrNumArry.sort().map(num => parseInt(num)).at(ncrNumArry.length - 1)+ 1);
    //
    
