const {jsPDF } = window.jspdf;






// Debugging: Check if the button exists
document.getElementById("pdf").addEventListener("click", generatePDF);





async function generatePDF(event) {
    //Take all of the data getelementbyID inside this function
    event.preventDefault(); 
    console.log("Generate PDF function triggered"); 
    
    const formfromlog = document.getElementById('formViewFromLog');
    
    
    const doc = new jsPDF({
        orientation: "portrait", 
        unit: "px", 
        format: "a4", 
    });

    
    const pageWidth = doc.internal.pageSize.getWidth(); 
    const pageHeight = doc.internal.pageSize.getHeight(); 
    const contentWidth = formfromlog.offsetWidth; 
    const contentHeight = formfromlog.offsetHeight; 

    const scaleFactor = Math.min(pageWidth / contentWidth, pageHeight / contentHeight); 

    await doc.html(formfromlog, {
        callback: function (doc) {
            console.log("PDF generated"); 
            doc.save(`NCR####.pdf`); 
        },
        x: 10, 
        y: 10, 
        html2canvas: {
            scale: scaleFactor, 
        },
    });
}