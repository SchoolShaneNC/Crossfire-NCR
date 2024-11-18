
for(var i = 0; i < LogData.logs.length; i++){
    if (LogData.logs[i].NcrNo == ncrButton){
    //injecting date in so when viewed its initial date when edited its todays date
        let html = `<div class="required-field"></div>
        <label for="dateString">Date:</label>
        <p id="dateString">${LogData.logs[i].Dated}</p>`
        document.getElementById("date").innerHTML = html;
    //since the html page runs edit2 first we dont need to do the assinging and can still access variables
    //made edit3 so it only runs when directed to viewlog page more simple then adding it into edit2 for me
        //disabling everything
        document.getElementById("ncrNo").disabled = true;
        document.getElementById("supplier-rec-insp").disabled = true;
        document.getElementById("wip").disabled = true;
        document.getElementById("supplierName").disabled = true;
        document.getElementById("poProdNo").disabled = true;
        document.getElementById("salesOrderNo").disabled = true;
        document.getElementById("quantityReceived").disabled = true;
        document.getElementById("quantityDefective").disabled = true;
        document.getElementById("itemDescription").disabled = true;
        document.getElementById("itemDefect").disabled = true;
        document.getElementById("qi-yes").disabled = true;
        document.getElementById("qi-no").disabled = true;
        }
        document.getElementById("qualityRepName").disabled = true;
    }
