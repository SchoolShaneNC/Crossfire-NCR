let login = getData3();
console.log(login);

document.getElementById("batoom").addEventListener("click", function(){
  let ncounter = 0;

  let name =  document.getElementById("loginName").value;
  let password = document.getElementById("loginPass").value;
  for(i = 0;  i < login.emp.length; i++){

    if (login.emp[i].User == name){

        if (login.emp[i].Pass == password){
            sessionStorage.setItem("role", login.emp[i].Role)
            sessionStorage.setItem("Name", login.emp[i].User)
            alert(login.emp[i].Role);
            window.location.href="index.html";
            break;
        }
        else{
            console.log("password is wrong");
            alert("Password is incorrect");
            document.getElementById("loginPass").value = "";
        }
    } 
    else if (login.emp[i].User != name){
        console.log("username is wrong");
        ncounter = ncounter + 1;
    }
  
  }
  if (ncounter == 5){
    alert("Username is wrong");
    document.getElementById("loginName").value = "";
  }
})

