document.getElementById("filter1").addEventListener("keyup", searchFilter);
document.getElementById("filter2").addEventListener("keyup", searchFilter);
document.getElementById("filter3").addEventListener("keyup", searchFilter);

//calling searchFilter on any of the 3 filter keyup actions

function searchFilter()
{
    //retrieving all 3 filter objects assigning their variables
    var searchName = document.getElementById("filter1");
    var searchRec = document.getElementById("filter2");
    var searchDef = document.getElementById("filter3");

    //decloration, retrieving the table data and searched strings inside filter objects
        var filter, filter2, filter3, table, tr, td;
        filter = searchName.value.toUpperCase();
        filter2 = searchRec.value.toUpperCase();
        filter3 = searchDef.value.toUpperCase();
        table = document.getElementById("ncrTable");
        tr = table.getElementsByTagName("tr");
        td = table.getElementsByTagName("td");
        
    //looping through each row checking each cell to its filter, passes if any letter/number is found or is null
    //if td keeps the header from dissapearing during the searches
        for (var i = 0; i < tr.length; i++) {
                if (td) {
                    txtValue = tr[i].cells[1].textContent.toUpperCase(); 
                    txtvalue2 = tr[i].cells[2].textContent.toUpperCase();
                    txtvalue3 = tr[i].cells[3].textContent.toUpperCase();
                        if (txtValue.toUpperCase().indexOf(filter) > -1 && txtvalue2.toUpperCase().indexOf(filter2) > -1 && txtvalue3.toUpperCase().indexOf(filter3) > -1) {
                            tr[i].style.display = "";
                            } else {
                                tr[i].style.display = "none";
                        }
                }
        }
}



let reset = document.getElementById("resetButton").addEventListener("click", resetFilters);
function resetFilters()
{
//sets all filter textboxs to empty
    document.getElementById("filter1").value = "";
    document.getElementById("filter2").value = "";        
    document.getElementById("filter3").value = "";
//retrieves table once again, loops through each row and displays it
//without table stays on the filtered version with emptied filters
    var table = document.getElementById("ncrTable");
    var tr = table.getElementsByTagName("tr");
    for (var i = 0; i < tr.length; i++) {
        tr[i].style.display = "";
    }
}






