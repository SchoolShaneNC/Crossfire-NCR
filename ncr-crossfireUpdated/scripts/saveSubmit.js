let data11 = localStorage.getItem('LoggedData');
let datatest = JSON.parse(data11);
console.log(datatest);
let LogDatatest = [];

let localURL = "C:\Users\shane\OneDrive\Desktop\LogData.json.txt";
async function fetchdata(sourceURL) {
    let response = await fetch(sourceURL);
    if (response.ok != true){
        throw new Error(response.statusText);
    }
    return await response.json();
}
fetchdata(localURL);
console.log(localURL);





datatest.logs.push({
    NcrNo : "2024-006",
        IPA : "wip",
        //Product Details
        SupplierName : "Wood Cococo",
        ProductNum : 142756384952,
        SalesOrderNum : 1234,
        QuantRec : 30,
        QuantDef : 22,
        //Item Details
        DescriptionItem : "Long planks of wood, 2x22 length and are rectangle shaped",
        DescriptionDefect : "Wood was rotted badly and was way too flimsy to use, some were chipped a lot and had heavy damage",
        //final section
        ItemMarkedNC : "qi-yes",
        QualRepName : "Shane Milton",
        Dated : "2024-01-24",
        Status : "Closed",
        //Engineer Section   
        DispositionRadio : "use-as-is",
        DispositionText : null,
        CustomerNotification : "notifYes",
        UpdateDrawing : "updYes",
        OrgRevNum : "",
        UpdRevNum : "",
        EngName : "",
        EngDate : "2024-09-24"

});
//data11 = JSON.stringify(datatest);
console.log(datatest);
xy = JSON.stringify(datatest);
console.log(xy);
localStorage.setItem('LoggedData', xy);
let thetest = localStorage.getItem('LoggedData');
let thetesttest = JSON.parse(thetest);
console.log(datatest);

//console.log(logData);