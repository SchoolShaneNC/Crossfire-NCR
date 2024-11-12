
window.onload = function() {
    const todayDate = new Date();

    const day = todayDate.getDate();
    const month = todayDate.getMonth();
    const year = todayDate.getFullYear();

    const dateString = `${day}/${month}/${year}`;
    

    let html = `<div class="required-field"></div>
    <label for="dateString">Date:</label>
    <p id="dateString">${dateString}</p>`

console.log(html)
  
    document.getElementById("date").innerHTML = html;
    
};
