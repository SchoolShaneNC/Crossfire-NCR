document.getElementById("filter1").addEventListener("keyup", searchFilter);
document.getElementById("filter2").addEventListener("keyup", searchFilter);
document.getElementById("filter3").addEventListener("keyup", searchFilter);

function searchFilter()
{
    var searchName = document.getElementById("filter1");
    var searchRec = document.getElementById("filter2");
    var searchDef = document.getElementById("filter3");

        var filter, filter2, filter3, table, tr, td;
        filter = searchName.value.toUpperCase();
        filter2 = searchRec.value.toUpperCase();
        filter3 = searchDef.value.toUpperCase();
        table = document.getElementById("ncrTable");
        tr = table.getElementsByTagName("tr");
        td = table.getElementsByTagName("td");
        
        for (var i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[1];
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
        






