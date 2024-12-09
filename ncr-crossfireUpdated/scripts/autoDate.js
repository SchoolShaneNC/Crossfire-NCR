
window.addEventListener("load", function() {
    const todayDate = new Date();

    const day = todayDate.getDate();
    const month = todayDate.getMonth();
    const year = todayDate.getFullYear();

    const dateString = `${day}/${month}/${year}`;
    

    let html = `<div class="required-field"></div>
    <label for="dateString">Date</label>
    <p id="dateString">${dateString}</p>`
  
    document.getElementById("date").innerHTML = html;
    
})
