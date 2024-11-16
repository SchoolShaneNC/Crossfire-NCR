// Select the input elements
const quantityReceived = document.getElementById("quantityReceived");
const quantityDefective = document.getElementById("quantityDefective");

// Changes the 'max' attribute of quantityDefective depending on quantityReceived
quantityReceived.addEventListener("input", () => {
    const receivedValue = parseInt(quantityReceived.value) || 0; // Current value of quantityReceived
    quantityDefective.max = receivedValue; // Updates max attribute of quantityDefective

    // Ensure that quantityDefective is not higher than quantityReceived
    if (parseInt(quantityDefective.value) > receivedValue) {
        quantityDefective.value = receivedValue; // Resets Input if over max
    }
});

// Prevents invalid input in quantityDefective
quantityDefective.addEventListener("input", () => {
    const defectiveValue = parseInt(quantityDefective.value) || 0;
    if (defectiveValue > parseInt(quantityReceived.value)) {
        quantityDefective.value = quantityReceived.value;
    }
    
});
