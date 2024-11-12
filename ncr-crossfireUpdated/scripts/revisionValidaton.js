const originalRev = document.getElementById("orgrevnum");
const updatedRev = document.getElementById("updrevnum");

function validateInputs() {
  const originalValue = parseFloat(originalRev.value);
  const updatedValue = parseFloat(updatedRev.value);

  // if statement to make sure neither number is negative
  if (originalValue < 0) {
    originalRev.value = 0; 
    alert("Original revision number cannot be negative.");
  }
  
  if (updatedValue < 0) {
    updatedRev.value = 0;
    alert("Updated revision number cannot be negative.");
  }

  // updatedrev>=originalrev
  if (updatedValue < originalValue) {
    updatedRev.value = originalRev.value;
    alert("The updated revision number cannot be less than the original revision number.")
  }
}

// Add event listeners for input changes
originalRev.addEventListener("input", validateInputs);
updatedRev.addEventListener("blur", validateInputs);
