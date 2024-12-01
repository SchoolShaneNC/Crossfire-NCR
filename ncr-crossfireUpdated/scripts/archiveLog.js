
//getting json data
const jsonData = localStorage.getItem('LoggedData');
const data = JSON.parse(jsonData);
let logData = [];
logData = data.logs;

let filteredLog = logData.filter(NCR => NCR.Status === "Closed");

let literalString = "";

$.each(filteredLog, function(i, ncr){
    var tblRow =    "<tr><td>" + ncr.NcrNo + 
                    "</td><td>" + ncr.Dated + 
                    "</td><td>" + ncr.SupplierName;
    
                    
                    tblRow += "</td><td><button title='View NCR Details' class=" +'button' + " id=" +ncr.NcrNo+" type=" +"button" + " " + "onclick = editNCR(this.value);" + "location.href="+"'formViewFromLog.html'" + " value=" + ncr.NcrNo +">Details</button>"
                        
                    tblRow +="</td></tr>" 
                    literalString += tblRow;                 
});
function editNCR(value){
    localStorage.setItem('editSelect', value);    
}

document.getElementById("archiveTable").innerHTML = literalString;