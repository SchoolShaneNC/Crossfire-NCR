
for(var i = 0; i < LogData.logs.length; i++){
    if (LogData.logs[i].NcrNo == ncrButton){
    //injecting date in so when viewed its initial date when edited its todays date
        let html = `<div class="required-field"></div>
        <label for="dateString">Date:</label>
        <p id="dateString">${LogData.logs[i].Dated}</p>`
        document.getElementById("engDate").innerHTML = html;
    //since the html page runs edit2 first we dont need to do the assinging and can still access variables
    //made edit3 so it only runs when directed to viewlog page more simple then adding it into edit2 for me
        //disabling everything
        document.getElementById("ncrNo").disabled = true;
        document.getElementById("supplier-rec-insp").disabled = true;
        document.getElementById("wip").disabled = true;
        document.getElementById("comboBox").disabled = true;
        document.getElementById("poProdNo").disabled = true;
        document.getElementById("salesOrderNo").disabled = true;
        document.getElementById("quantityReceived").disabled = true;
        document.getElementById("quantityDefective").disabled = true;
        document.getElementById("itemDescription").disabled = true;
        document.getElementById("itemDefect").disabled = true;
        document.getElementById("qi-yes").disabled = true;
        document.getElementById("qi-no").disabled = true;
        document.getElementById("engDate").disabled = true;
        document.getElementById("QiDate").disabled = true;
        document.getElementById("qualityRepName").disabled = true;
        if (LogData.logs[i].EngName != ""){
            document.getElementById("engName").value = LogData.logs[i].EngName;
        }

        document.getElementById(LogData.logs[i].PurchDec).disabled = true;
        document.getElementById(LogData.logs[i].CARRaised).disabled = true;
        document.getElementById("car-num").disabled = true;
        document.getElementById(LogData.logs[i].FollowUp).disabled = true;
        document.getElementById("car-type").disabled = true;
        document.getElementById("car-date").disabled = true,
        document.getElementById("op-name").disabled = true,
        document.getElementById("op-date").disabled = true,
        document.getElementById("inspector-name").disabled = true,
        document.getElementById("inspect-date").disabled = true,
        document.getElementById("quality-name").disabled = true,
        document.getElementById("quality-date").disabled = true,
        document.getElementById(LogData.logs[i].NcrClosed).disabled = true



        }


    }
