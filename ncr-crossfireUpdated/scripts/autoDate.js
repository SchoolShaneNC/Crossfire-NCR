function autoDate(){
        const todayDate = new Date.now();
    const dateInput = document.getElementById("date");

    if (!dateInput) {
        dateInput.value = todayDate;
    }
}

window.onload = function() {
 autoDate()
};