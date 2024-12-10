//needed a second js file because i couldnt get any triggered events to work well for multiple reasons, formedit has src to editncrlog so all array variables passed through
//gets the button value loops through to find the matching ncr num
//displays all log data from the log matched to the button
//second if is needed since i had null in a log data, looking back on the create page it auto goes to yes (non conforming) so might not be needed
let ncrButton = sessionStorage.getItem('editSelect');
let theSupplier = getData2();
for(var i = 0; i < LogData.logs.length; i++){
    if (LogData.logs[i].NcrNo == ncrButton){

        //this will change when i add if qi was finished so it doesnt switch finished qi part to a new name
        if (currentRole == "QI"){
            document.getElementById("qualityRepName").value = currentUser;
        }
        if (currentRole == "EN"){
            document.getElementById("engName").value = currentUser;
            var today = new Date().toISOString().substr(0, 10);
            document.getElementById("engDate").value = today;
        }
        if (currentRole == "PA"){
            document.getElementById("op-name").value = currentUser;
        }
        document.getElementById("ncrNo").value = LogData.logs[i].NcrNo;
        document.getElementById(LogData.logs[i].IPA).checked = true;
        const comboBox = document.getElementById("comboBox");
        const companies1 = [];
    
                for(z of theSupplier){
                  const option = document.createElement("option");
                  option.value = z.supName.toLowerCase();
                  option.textContent = z.supName;
                  x = companies1.find(({ supName }) => supName === z.supName);
                    if (x == undefined){
                        companies1.push({'supName':option.textContent});
                        comboBox.appendChild(option);
                    }
                    if (LogData.logs[i].SupplierName == z.supName){
                        let k = "supName";
                        let val = z.supName;
                        let objIndex = companies1.findIndex(
                            (temp) => temp[k] === val
                        );
                        document.getElementById("comboBox").selectedIndex = objIndex;
                    }
                }

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
        let html = `<div class="required-field"></div>
        <label for="dateString">Date:</label>
        <p id="dateString">${LogData.logs[i].Dated}</p>`;
        document.getElementById("engDate").innerHTML = html;
        document.getElementById("QiDate").value = LogData.logs[i].Dated;
        document.getElementById("engDate").value = LogData.logs[i].EngDate;
        document.getElementById("qualityRepName").value = LogData.logs[i].QualRepName;
        document.getElementById("qualityRepName").value = LogData.logs[i].QualRepName;
        
        document.getElementById(LogData.logs[i].PurchDec).checked = true;
        document.getElementById(LogData.logs[i].CARRaised).checked = true;
        document.getElementById("car-num").value = LogData.logs[i].CARNum;
        document.getElementById(LogData.logs[i].FollowUp).checked = true;
        document.getElementById("car-type").value = LogData.logs[i].IndicateType;
        document.getElementById("car-date").value = LogData.logs[i].IndicateDate,
        document.getElementById("op-name").value = LogData.logs[i].OpManager,
        document.getElementById("op-date").value = LogData.logs[i].OpDate,
        document.getElementById("inspector-name").value = LogData.logs[i].InName,
        document.getElementById("inspect-date").value = LogData.logs[i].InDate,
        document.getElementById("quality-name").value = LogData.logs[i].QuName,
        document.getElementById("quality-date").value = LogData.logs[i].QuDate,
        document.getElementById(LogData.logs[i].NcrClosed).checked = true
        break;
    }
}
