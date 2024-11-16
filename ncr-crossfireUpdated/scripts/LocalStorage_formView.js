//retrieves log table values and stores in array
const myTableData = []
var table, tr, td;
table = document.getElementById("ncrTable");
tr = table.getElementsByTagName("tr");
td = table.getElementsByTagName("td");
for (var i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            let theRows = {
            NcrNum : tr[i].cells[0].textContent,
            //ProductName : tr[i].cells[1].textContent,
            //QuantRec : tr[i].cells[2].textContent,   incase we need to retrieve all fields later
            //QuantDef : tr[i].cells[3].textContent
            }
            myTableData.push(theRows);
        }
}
//converts array to json string then stores it into the locan storage
const tableData2 = JSON.stringify(myTableData);
localStorage.setItem('tableData', tableData2);

//NEEDS the scr file to go after the editNcrLog src or will not work giving null values

