
//getting json data
const jsonData = localStorage.getItem('LoggedData');
const data = JSON.parse(jsonData);
let logData = [];
logData = data.logs;
console.log(logData);

let filteredLog = logData.filter(NCR => NCR.Status === "Closed");
console.log(filteredLog);

let literalString = "";

$.each(filteredLog, function(i, ncr){
    var tblRow =    "<tr><td>" + ncr.NcrNo + 
                    "</td><td>" + ncr.ProductNum + 
                    "</td><td>" + ncr.QuantRec +
                    "</td><td>" + ncr.QuantDef;
    
                    
                    tblRow += "</td><td><button class=" +'button' + " id=" +ncr.NcrNo+" type=" +"button" + " " + "onclick = editNCR(this.value);" + "location.href="+"'formViewFromLog.html'" + " value=" + ncr.NcrNo +">View</button>"
                        
                    tblRow +="</td></tr>" 
                    literalString += tblRow;                 
});
function editNCR(value){
    localStorage.setItem('editSelect', value);    
}

document.getElementById("archiveTable").innerHTML = literalString;