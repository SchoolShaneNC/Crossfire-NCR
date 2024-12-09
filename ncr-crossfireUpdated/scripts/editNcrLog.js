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
                            tblRow += "</td><td><button style='width: 5.1em' title='Edit NCR Fields' class=button" + " id=" +logs.NcrNo+" type=" +"button" + " " + "onclick = downloadPDF(this.value);" + "location.href="+"'formViewFromLog.html'" + " value=" + logs.NcrNo +">Download</button>"
                            tblRow += "</td><td><button title='View NCR Details' class=button" + " id=" +logs.NcrNo+" type=" +"button" + " " + "onclick = editNCR(this.value);" + "location.href="+"'formViewFromLog.html'" + " value=" + logs.NcrNo +">Details</button>"
                        }
                        tblRow +="</td></tr>" 
                        literalString += tblRow;
                        document.getElementById("NcrLogTable").innerHTML = literalString;
})
searchFilter()};


//this gets triggered by the onclick in literalstring and takes the value of what log its on
//the value is the ncr num to tie the button to the corrosponding log in the table row
function editNCR(value){
    sessionStorage.setItem('editSelect', value);    
}
//pop up if you try to edit closed log
function editError(){
    alert(`Cannot edit log because status is Closed`);
}

function downloadPDF(value){
    sessionStorage.setItem('editSelect', value);    

}


//Radio button interactions
document.getElementById("revision-radio").addEventListener("change", function(e){
    let target = e.target

    const orgRevNum = document.getElementById("org-rev-num")
    const orgRevName = document.getElementById("org-rev-name")
    const orgRevDate = document.getElementById("org-rev-date")

    const updRevNum = document.getElementById("upd-rev-num")
    //const updRevName = document.getElementById("upd-rev-name")
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
        //updRevName.disabled = true
        updRevDate.disabled = true

        updRevNum.required=false
        //updRevName.required=false
        updRevDate.required=false

        updRevNum.value = ""
        //updRevName.value = ""
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
        //updRevName.disabled = false
        updRevDate.disabled = false

        updRevNum.required= true
        //updRevName.required=true
        updRevDate.required=true
    }  
})

document.getElementById("disposition-radio").addEventListener("change", function(e){
    let target = e.target

    let engDisposition = document.getElementById("eng-disposition")

    if(target.value == "use" || target.value == "scrap"){
        engDisposition.disabled=true
        engDisposition.value = ""
        engDisposition.required = false
    }
    else{
        engDisposition.disabled=false
        engDisposition.required = true
    }
})

document.getElementById("raised-radio").addEventListener("change", function(e){
    let target = e.target

    let carNum= document.getElementById("car-num")

    let radYes= document.getElementById("follow-yes")
    let radNo= document.getElementById("follow-no")

    let carType = document.getElementById("car-type")
    let carDate = document.getElementById("car-date")

    if(target.value == "car-no"){
        carNum.disabled=true
        carNum.value = ""
        carNum.required = false

        radYes.checked = false
        radYes.disabled=true

        radNo.checked = true
        radNo.disabled=true

        carType.disabled=true
        carType.value = ""
        carType.required = false

        carDate.disabled=true
        carDate.value = ""
        carDate.required = false
    }
    else{
        carNum.disabled=false
        carNum.required = false

        radYes.checked = true
        radYes.disabled= false

        radNo.checked = false
        radNo.disabled= false

        carType.disabled=  false
        carType.required = true

        carDate.disabled=  false
        carDate.required = true
    }
})

document.getElementById("follow-up-radio").addEventListener("change", function(e){
    let target = e.target

    let carType = document.getElementById("car-type")
    let carDate = document.getElementById("car-date")

    if(target.value == "no"){
        carType.disabled=true
        carType.value = ""
        carType.required = false

        carDate.disabled=true
        carDate.value = ""
        carDate.required = false
    }
    else{
        carType.disabled=  false
        carType.required = true

        carDate.disabled=  false
        carDate.required = true
    }
})