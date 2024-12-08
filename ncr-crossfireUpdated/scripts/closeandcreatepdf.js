const { jsPDF } = window.jspdf;

// Click event for the generatePDF function
document.getElementById("pdf").addEventListener("click", generatePDF);

// Take all of the data getElementByID inside this function
async function generatePDF(event) {
    // Prevents the function from running over and over again
    event.preventDefault();

    if (!confirm("Are you sure you want to close this NCR?")) {
        console.log("User canceled the operation.");
        return; 
    }

    const formfromlog = document.getElementById('formViewFromLog');
    console.log(formfromlog);

    // Retrieve data from every field in formViewFromLog.html along with their labels
    const formData = {
        ncrNo: { label: "NCR No.", value: document.getElementById('ncrNo')?.value || 'N/A' },
        identityProcess: { 
            label: "Identity Process Applicable", 
            value: document.querySelector('input[name="identity-process"]:checked')?.value || 'N/A' 
        },
        supplierName: { label: "Supplier Name", value: document.getElementById('supplierName')?.value || 'N/A' },
        poProdNo: { label: "PO or Prod. No.", value: document.getElementById('poProdNo')?.value || 'N/A' },
        salesOrderNo: { label: "Sales Order No.", value: document.getElementById('salesOrderNo')?.value || 'N/A' },
        quantityReceived: { label: "Quantity Received", value: document.getElementById('quantityReceived')?.value || 'N/A' },
        quantityDefective: { label: "Quantity Defective", value: document.getElementById('quantityDefective')?.value || 'N/A' },
        itemDescription: { 
            label: "Description of Item", 
            value: document.getElementById('itemDescription')?.value || 'N/A' 
        },
        itemDefect: { 
            label: "Description of Defect", 
            value: document.getElementById('itemDefect')?.value || 'N/A' 
        },
        nonConforming: { 
            label: "Item Marked Non-Conforming", 
            value: document.querySelector('input[name="nonConforming"]:checked')?.value || 'N/A' 
        },
        qualityRepName: { 
            label: "Quality Representative's Name", 
            value: document.getElementById('qualityRepName')?.value || 'N/A' 
        },
        disposition: { 
            label: "Disposition", 
            value: document.querySelector('input[name="disposition"]:checked')?.value || 'N/A' 
        },
        engDisposition: { 
            label: "Engineering Disposition", 
            value: document.getElementById('engdisposition')?.value || 'N/A' 
        },
        notification: { 
            label: "Customer Notification Required", 
            value: document.querySelector('input[name="notification"]:checked')?.value || 'N/A' 
        },
        update: { 
            label: "Drawing Update Required", 
            value: document.querySelector('input[name="update"]:checked')?.value || 'N/A' 
        },
        originalRevisionNumber: { 
            label: "Original Revision Number", 
            value: document.getElementById('org-rev-num')?.value || 'N/A' 
        },
        updatedRevisionNumber: { 
            label: "Updated Revision Number", 
            value: document.getElementById('upd-rev-num')?.value || 'N/A' 
        },
        engineerName: { label: "Name of Engineer", value: document.getElementById('engName')?.value || 'N/A' },
        engineerDate: { label: "Engineering Date", value: document.getElementById('engDate')?.value || 'N/A' },
    };
    console.log(formData);

    // Updates the log's status in seed data
    const curLogFile = LogDataFile.logs.find(log => log.NcrNo === formData.ncrNo.value);
    if (curLogFile) {
        if (curLogFile.Status === "Open") {
            curLogFile.Status = "Closed";
            console.log(`Log No. ${formData.ncrNo.value} status changed to Closed.`);
    }   else {
            console.log(`Log No. ${formData.ncrNo.value} status is already Closed.`);
    }
    }   else {
            console.log(`Log with NCR No. ${formData.ncrNo.value} not found.`);
}
    

    // Create a new blank PDF with simple labels and values
    const doc = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: "a4",
    });

    // Add form data to the PDF as a list
    let yPosition = 20; // Initial vertical position for content
    for (const key in formData) {
        const field = formData[key];
        doc.text(`${field.label}: ${field.value}`, 20, yPosition);
        yPosition += 20; // Move down for the next field
    }

    // Save the PDF
    const pdfFileName = `NCR_${formData.ncrNo.value}.pdf`;
    doc.save(pdfFileName);
    console.log(`PDF saved as ${pdfFileName}`);

    //pop-up letting user know NCR is closed
    
}