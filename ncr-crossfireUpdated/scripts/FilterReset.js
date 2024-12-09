//getting filters, needs to get empty date boxs to store on change event 
document.getElementById("filter1").addEventListener("keyup", searchFilter);
document.getElementById("filter3").addEventListener("keyup", searchFilter);
let radFilter = "Open";
let searchDate = document.getElementById("fromDate");
let searchEndDate = document.getElementById("endDate");
//on click for radio buttons assigns the value to get later then starts the search filter
$(document).ready(function(){
    $('input[type=radio]').click(function(){
        if (this.name == "filter4"){
            radFilter = this.value;
            searchFilter();
        }
    });
});
//same thing but when the date changes for any date picker, assigning them outside the main function is way simpler than trying inside
$(document).ready(function () {
    $('input[type=date]').change(function(){
            searchDate = document.getElementById("fromDate");
            searchEndDate = document.getElementById("endDate");
            searchFilter();
        
    });
}) 

function searchFilter()
{   //reassigning searchdate values makes it easier later
    console.log("this serach is workin");
    console.log(radFilter);

    var searchNcrNum = document.getElementById("filter1");
    let selectedDate = searchDate.value;
    let selectedEndDate = searchEndDate.value;
    //this is the date switch if end date comes before start date switches variables and switches users date picker 
    if (selectedEndDate < selectedDate){
        if (selectedEndDate == "") {
            } 
        else{
            let temp = selectedEndDate;
            selectedEndDate = selectedDate;
            selectedDate = temp;
            document.getElementById("fromDate").value =  selectedDate;
            document.getElementById("endDate").value = selectedEndDate ;
        }
    }
    //same old getting and displaying table
    var searchSupplier = document.getElementById("filter3");
    var filter, filter3, table, tr, td;
    filter = searchNcrNum.value.toUpperCase();
    filter3 = searchSupplier.value.toUpperCase();
    table = document.getElementById("ncrTable");
    tr = table.getElementsByTagName("tr");
    td = table.getElementsByTagName("td");
    console.log(radFilter);


        for (var i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[1];
                if (td) {
                    txtValue = tr[i].cells[0].textContent.toUpperCase(); 
                    txtvalue2 = tr[i].cells[1].textContent.toUpperCase();
                    txtvalue3 = tr[i].cells[2].textContent.toUpperCase();
                    txtvalue4 = tr[i].cells[3].textContent;
//long ands and ors for each txtvalues keep txtval statements seperated by () txtval2 doubles as only endDate selected from there and anytime before thought it was good feature
                        if (txtValue.toUpperCase().indexOf(filter) > -1 && (txtvalue2 <= selectedEndDate && txtvalue2 >= selectedDate || txtvalue2 == selectedDate || selectedDate + selectedEndDate == "")  && txtvalue3.toUpperCase().indexOf(filter3) > -1 && (txtvalue4 == radFilter)) {
                            tr[i].style.display = "";
                            } else {
                                tr[i].style.display = "none";
                        }
                }
        }
}
    //on button click
    let reset = document.getElementById("resetButton").addEventListener("click", resetFilters);
    function resetFilters()
    {
        //sets all filter textboxs to empty, radio buttons to deselect, radfilter variable to undefined if not after reset it still has the value of previous selection
        document.getElementById("filter1").value = "";
        document.getElementById("filter3").value = "";
        document.getElementById('endDate').value = ''
        document.getElementById('fromDate').value = ''
        //retrieves table once again, loops through each row and displays it
        //without table stays on the filtered version with emptied filters
        var table = document.getElementById("ncrTable");
        var tr = table.getElementsByTagName("tr");
        for (var i = 0; i < tr.length; i++) {
            if (tr[i].cells[3].textContent == "Open"){
                tr[i].style.display = "";
        }}
    }
