document.getElementById("ncrClose").addEventListener("click", CloseNCR);

async function CloseNCR(event) {
    event.preventDefault();

    confirm("Are you sure you want to close this NCR?");{
        alert("You have successfully closed this NCR")

    }
    
}