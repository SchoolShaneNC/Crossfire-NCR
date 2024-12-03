const input = document.getElementById("role-select").value

document.getElementById("batoom").addEventListener("click", function(){
    const input = document.getElementById("role-select").value

    localStorage.setItem("role", input)
    
    alert(input)

    window.location.href="index.html";
})

