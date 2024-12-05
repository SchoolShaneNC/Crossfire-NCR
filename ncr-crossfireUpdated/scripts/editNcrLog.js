//tracking down the html page for the if, without it gives errors on edit page

LogData = getData();
console.log('Data on Page 1:', LogData);
htmlPage = window.location.pathname

if (htmlPage == "/ncr-crossfireUpdated/formView.html"){
let literalString = ""; //empty out of scope needed, if u just use tblrow will only display the last entry
$.each(LogData.logs, function(i, logs) {
    var tblRow =    "<tr><td>" + logs.NcrNo + 
                    "</td><td>" + logs.Dated + 
                    "</td><td>" + logs.SupplierName +
                    "</td><td>" + logs.Status;
                    if (logs.Status == "Open"){
                        tblRow += "</td><td><button title='Edit NCR Fields' class=" +'button' + " id=" +logs.NcrNo+" type=" +"button" + " " + "onclick = editNCR(this.value);" + "location.href="+"'formEdit.html'" + " value=" + logs.NcrNo +">Edit</button>"
                        tblRow += "</td><td><button title='View NCR Details' class=" +'button' + " id=" +logs.NcrNo+" type=" +"button" + " " + "onclick = editNCR(this.value);" + "location.href="+"'formViewFromLog.html'" + " value=" + logs.NcrNo +">Details</button>"
                        }else{
                            tblRow += "</td><td><button title='Edit NCR Fields' class=button" + " id=" +logs.NcrNo+" type=" +"button" + " " + "onclick = editError();" +  " value=" + logs.NcrNo +">Edit</button>"
                            tblRow += "</td><td><button title='View NCR Details' class=button" + " id=" +logs.NcrNo+" type=" +"button" + " " + "onclick = editNCR(this.value);" + "location.href="+"'formViewFromLog.html'" + " value=" + logs.NcrNo +">Details</button>"
                        }
                        tblRow +="</td></tr>" 
                        literalString += tblRow;
                        document.getElementById("NcrLogTable").innerHTML = literalString;
});


//this gets triggered by the onclick in literalstring and takes the value of what log its on
//the value is the ncr num to tie the button to the corrosponding log in the table row
function editNCR(value){
    sessionStorage.setItem('editSelect', value);    
}
//pop up if you try to edit closed log
function editError(){
    alert(`Cannot edit log because status is Closed`);
}

//Radio button interactions
document.getElementById("revision-radio").addEventListener("change", function(e){
    let target = e.target

    if(target.value == "no"){
        document.getElementById("org-rev-num").disabled=true
        document.getElementById("upd-rev-num").disabled=true
        document.getElementById("org-rev-num").value = ""
        document.getElementById("upd-rev-num").value = ""
    }
    if(target.value == "yes"){
        document.getElementById("org-rev-num").disabled=false
        document.getElementById("upd-rev-num").disabled=false
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
})}