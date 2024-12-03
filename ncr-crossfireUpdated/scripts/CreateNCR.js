//once verything is loaded and js reconizes then it runs the function
document.addEventListener("DOMContentLoaded", function() {
    ncrNumGenertator();
});

function ncrNumGenertator()
{
    //pulling the table data (ncrNum cell only) from the local storage and reparsing it back to an object, big long string if dont
    //putting the json object into an array to access
    let LogData = getData();
    console.log('Data on Page 1:', LogData);

    const theDate = new Date()  //getting the year and an empty array to push filtered data into 
    let theYear = theDate.getFullYear();
    const ncrNumArry = [];
    const newTable = (LogData.logs.filter(x => x.NcrNo.substring(0,4) == theYear)) //filter if year matches then adds the key values into the empty array 
    console.log(newTable);
    for (let x of newTable){
        ncrNumArry.push(x.NcrNo);
    }
    console.log(`this the ncrnum array ${ncrNumArry}`);
    newNum = parseInt(ncrNumArry.sort().at(ncrNumArry.length - 1).substring(5)) + 1;//parse the filtered new array, sorts so the biggest num is always at the botton if new logs get added
    newNum = (theYear + "-" + newNum.toString().padStart(3,'0'));     //takes last 3 digits of last item adds 1 then puts that into the final string, padstart makes sure it fills the 3 end digits with 0s if needed
    document.getElementById("ncrNo").value = newNum;
}

//Radio button interactions
document.getElementById("revision-radio").addEventListener("change", function(e){
    let target = e.target

    const orgRevNum = document.getElementById("org-rev-num")
    const orgRevName = document.getElementById("org-rev-name")
    const orgRevDate = document.getElementById("org-rev-date")

    const updRevNum = document.getElementById("upd-rev-num")
    const updRevName = document.getElementById("upd-rev-name")
    const updRevDate = document.getElementById("upd-rev-date")

    if(target.value == "no"){
        //org Rev group
        orgRevNum.disabled=true
        orgRevName.disabled=true
        orgRevDate.disabled=true

        orgRevNum.required=false
        orgRevName.required=false
        orgRevDate.required=false

        orgRevNum.value = ""
        orgRevName.value = ""
        orgRevDate.value = ""

        //upd Rev group
        updRevNum.disabled = true
        updRevName.disabled = true
        updRevDate.disabled = true

        updRevNum.required=false
        updRevName.required=false
        updRevDate.required=false

        updRevNum.value = ""
        updRevName.value = ""
        updRevDate.value = ""
    }
    if(target.value == "yes"){
        //org Rev group
        orgRevNum.disabled=false
        orgRevName.disabled=false
        orgRevDate.disabled=false

        orgRevNum.required=true
        orgRevName.required=true
        orgRevDate.required=true

        //upd Rev group
        updRevNum.disabled =  false
        updRevName.disabled = false
        updRevDate.disabled = false

        updRevNum.required= true
        updRevName.required=true
        updRevDate.required=true
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
    
