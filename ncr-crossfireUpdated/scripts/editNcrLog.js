//tracking down the html page for the if, without it gives errors on edit page
htmlPage = window.location.pathname
const data1 = localStorage.getItem('LoggedData');
const data2 = JSON.parse(data1);
let LogData = [];
LogData = data2;
if (htmlPage == "/ncr-crossfireUpdated/formView.html"){
let literalString = ""; //empty out of scope needed, if u just use tblrow will only display the last entry
$.each(LogData.logs, function(i, logs) {
    var tblRow =    "<tr><td>" + logs.NcrNo + 
                    "</td><td>" + logs.Dated + 
                    "</td><td>" + logs.SupplierName +
                    "</td><td>" + logs.Status;
                    if (logs.Status == "Open"){
                        tblRow += "</td><td><button class=" +'button' + " id=" +logs.NcrNo+" type=" +"button" + " " + "onclick = editNCR(this.value);" + "location.href="+"'formEdit.html'" + " value=" + logs.NcrNo +">Edit</button>"
                        tblRow += "</td><td><button class=" +'button' + " id=" +logs.NcrNo+" type=" +"button" + " " + "onclick = editNCR(this.value);" + "location.href="+"'formViewFromLog.html'" + " value=" + logs.NcrNo +">View</button>"
                        }else{
                            tblRow += "</td><td><button class=" +'button' + " id=" +logs.NcrNo+" type=" +"button" + " " + "onclick = editError();" +  " value=" + logs.NcrNo +">Edit</button>"
                            tblRow += "</td><td><button class=" +'button' + " id=" +logs.NcrNo+" type=" +"button" + " " + "onclick = editNCR(this.value);" + "location.href="+"'formViewFromLog.html'" + " value=" + logs.NcrNo +">View</button>"
                        }
                        tblRow +="</td></tr>" 
                        literalString += tblRow;
                        document.getElementById("NcrLogTable").innerHTML = literalString;
});
}
//this gets triggered by the onclick in literalstring and takes the value of what log its on
//the value is the ncr num to tie the button to the corrosponding log in the table row
function editNCR(value){
    localStorage.setItem('editSelect', value);    
}
//pop up if you try to edit closed log
function editError(){
    alert(`Cannot edit log because status is Closed`);
    }
    
