
window.onload = function() {
    const todayDate = new Date();

    const day = todayDate.getDate();
    const month = todayDate.getMonth();
    const year = todayDate.getFullYear();

    const dateString = `${day}/${month}/${year}`;
    const dateInput = document.getElementById("date");

    if (dateInput) {
        dateInput.value = dateString;
    }
};