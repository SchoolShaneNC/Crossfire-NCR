const data1 = localStorage.getItem('LoggedData');
const data2 = JSON.parse(data1);
let LogData = [];
LogData = data2;
console.log("outside is woring");


document.getElementById("qi-save-doc-button").addEventListener("click", saveToJson);

function saveToJson(){

console.log("inside is working");
  ncrno =  document.getElementById("ncrNo").value;
  //ipa = document.getElementById(LogData.logs[i].IPA)
 supname =   document.getElementById("supplierName").value;
  prodnum =  document.getElementById("poProdNo").value;
 saleordernum =   document.getElementById("salesOrderNo").value;
 quantrec =   document.getElementById("quantityReceived").value;
  quantdef =  document.getElementById("quantityDefective").value;
  descitem =  document.getElementById("itemDescription").value;
  descdefect =  document.getElementById("itemDefect").value;

/*  if (LogData.logs[i].ItemMarkedNC != null){
    document.getElementById(LogData.logs[i].ItemMarkedNC).checked = true;
    }else {
        document.getElementById("qi-yes").checked = false;
        document.getElementById("qi-no").checked = false;
    }*/
  qualrepname =   document.getElementById("qualityRepName");
  dated = document.getElementById("date").value;
    //document.getElementById("qualityRepName").value = LogData.logs[i].QualRepName;

    LogDataFile.logs = 
        {   NcrNo: ncrno,
            //IPA
            SupplierName : supname,
            ProductNum : prodnum,
            SalesOrderNum : saleordernum,
            QuantRec : quantrec,
            QuantDef : quantdef,
            DescriptionItem : descitem,
            DescriptionDefect : descdefect,
          //  ItemMarkedNC : 
            QualRepName : qualrepname,
            Dated : dated
        }; 

console.log(data1);
console.log(LogDataFile.logs);

}