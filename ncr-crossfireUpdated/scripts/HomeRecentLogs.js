
let LogData = getData();
console.log('Data on Page 1:', LogData);
let newData = [];

//parsing ncr num so i can .sort() it then pushing to new array to slice bottom sorted 5 
for(z of LogData.logs){
    x = (parseInt(z.NcrNo.substring(0,4) + parseInt(z.NcrNo.substring(5))));
newData.push(x);
newData.sort()
}
const ndFilter = newData.slice(-5);
//if the sliced array index = parsed ncr num then it displays that matching log. rest is same as viewlog page
literalString = "";
    for(let x = 0; x < LogData.logs.length; x++){
        for(z of ndFilter){
            if (z == (parseInt(LogData.logs[x].NcrNo.substring(0,4) + parseInt(LogData.logs[x].NcrNo.substring(5))))){
    
    var tblRow =    "<tr><td>" + LogData.logs[x].NcrNo + 
                    "</td><td>" + LogData.logs[x].Dated + 
                    "</td><td>" + LogData.logs[x].SupplierName +
                    "</td><td>" + LogData.logs[x].Status;
                    if (LogData.logs[x].Status == "Open"){
                        tblRow += "</td><td><button title='Edit NCR Fields'"  + "class=button" + ' id="' +LogData.logs[x].NcrNo + '" type="button"' + ' onclick = "editNCR(this.value)";' + 'location.href='+'"formEdit.html"' + ' value=' + LogData.logs[x].NcrNo +'>Edit</button>'
                        tblRow += "</td><td><button "+ "title='View NCR Details'" + " class=" +'button' + " id=" +LogData.logs[x].NcrNo+" type=" +"button" + " " + "onclick = editNCR(this.value);" + "location.href="+"'formViewFromLog.html'" + " value=" + LogData.logs[x].NcrNo +">Details</button>"
                        }else{
                            tblRow += "</td><td><button title='Edit NCR Fields'" + "class=button" + " id=" +LogData.logs[x].NcrNo+" type=button" + " onclick = editError();" +  " value=" + LogData.logs[x].NcrNo +">Edit</button>"
                            tblRow += "</td><td><button title='View NCR Details' class=button" + " id=" +LogData.logs[x].NcrNo+" type=button" + " onclick = editNCR(this.value);" + "location.href=formViewFromLog.html" + " value=" + LogData.logs[x].NcrNo +">Details</button>"
                        }
                        tblRow +="</td></tr>" 
                        literalString += tblRow;
                        document.getElementById("ncr-body-recent").innerHTML = literalString;
                    }
}};
//same from view logs page using same localstorage and edit and view scripts (edit2 edit3)
function editNCR(value){
    localStorage.setItem('editSelect', value);    
}
function editError(){
    alert(`Cannot edit log because status is Closed`);
}
