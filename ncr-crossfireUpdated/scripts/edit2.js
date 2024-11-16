//needed a second js file because i couldnt get any triggered events to work well for multiple reasons, formedit has src to editncrlog so all array variables passed through
//gets the button value loops through to find the matching ncr num
//displays all log data from the log matched to the button
//second if is needed since i had null in a log data, looking back on the create page it auto goes to yes (non conforming) so might not be needed
let ncrButton = localStorage.getItem('editSelect');
for(var i = 0; i < LogData.logs.length; i++){
    if (LogData.logs[i].NcrNo == ncrButton){
        document.getElementById("ncrNo").value = LogData.logs[i].NcrNo;
        document.getElementById(LogData.logs[i].IPA).checked = true;
        document.getElementById("supplierName").value = LogData.logs[i].SupplierName;
        document.getElementById("poProdNo").value = LogData.logs[i].ProductNum;
        document.getElementById("salesOrderNo").value = LogData.logs[i].SalesOrderNum;
        document.getElementById("quantityReceived").value = LogData.logs[i].QuantRec;
        document.getElementById("quantityDefective").value = LogData.logs[i].QuantDef;
        document.getElementById("itemDescription").value = LogData.logs[i].DescriptionItem;
        document.getElementById("itemDefect").value = LogData.logs[i].DescriptionDefect;
        document.getElementById("itemDefect").value = LogData.logs[i].DescriptionDefect;
        if (LogData.logs[i].ItemMarkedNC != null){
        document.getElementById(LogData.logs[i].ItemMarkedNC).checked = true;
        }else {
            document.getElementById("qi-yes").checked = false;
            document.getElementById("qi-no").checked = false;
        }
        document.getElementById("qualityRepName").value = LogData.logs[i].QualRepName;
        document.getElementById("qualityRepName").value = LogData.logs[i].QualRepName;
        break;
    }
}
