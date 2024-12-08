let LogData = getData();
console.log('Data on Page 1:', LogData);

let Supplier = getData2();
console.log('Data on Page 1:', Supplier);

const comboBox = document.getElementById("comboBox");
const companies1 = [];
console.log(companies1);

    function populateComboBox() {
        for(z of Supplier){
          console.log(z.supName);
          const option = document.createElement("option");
          option.value = z.supName.toLowerCase();
          option.textContent = z.supName;
          x = companies1.find(({ supName }) => supName === z.supName);
            if (x == undefined){
                companies1.push({'supName':option.textContent});
                comboBox.appendChild(option);
            }
        }
    }
    populateComboBox();


    document.addEventListener("DOMContentLoaded", () => {
        const comboBox = document.getElementById("comboBox");
        const itemInput = document.getElementById("itemInput");
        const addButton = document.getElementById("addButton");
        const removeButton = document.getElementById("removeButton");
    
        // Checks if an item exists in the combo box
        function itemExists(value) {
            const options = Array.from(comboBox.options);
            return options.some(option => option.textContent.toLowerCase() === value.toLowerCase());
        }
    
        // Add the item from the input
        function addItem() {
            const newItem = itemInput.value.trim();
            if (newItem === "") {
                alert("Please enter a valid item.");
                return;
            }
            if (itemExists(newItem)) {
                alert(`"${newItem}" already exists in the list.`);
            } else {
                const option = document.createElement("option");
                option.textContent = newItem;
                comboBox.appendChild(option);
                companies1.push({'supName':option.textContent});
                localStorage.setItem('SupplierData', JSON.stringify(companies1));
                alert(`"${newItem}" has been added.`);
                console.log(companies1);

            }
            itemInput.value = ""; // Clear the input field
        }
    
        // Removes the item from the list if it matchs (or selected)
        function removeItem() {
            const inputText = itemInput.value.trim();
            const selectedValue = comboBox.value;
    
            // If input is blank remove selected item
            if (inputText === "") {
                if (selectedValue) {
                    const selectedOption = comboBox.querySelector(`option[value="${selectedValue}"]`);
                    comboBox.removeChild(selectedOption);
                    alert(`"${selectedOption.textContent}" has been removed.`);
                } else {
                    alert("Please select an item from the list or enter text to remove.");
                }
            } else {
                // Remove item if match is found
                const options = Array.from(comboBox.options);
                const optionToRemove = options.find(option => option.textContent.toLowerCase() === inputText.toLowerCase());
                
                if (optionToRemove) {
                    comboBox.removeChild(optionToRemove);
                    console.log(optionToRemove.textContent);
                    x = companies1.at(optionToRemove.textContent);
                    console.log(x);
                    companies1.pop(x);
                    console.log(companies1);
                    console.log(companies1);
                    localStorage.setItem('SupplierData', JSON.stringify(companies1));
                    y  = getData2();
                    console.log(y);
                    alert(`"${inputText}" has been removed.`);
                } else {
                    alert(`"${inputText}" not found in the list.`);
                }
            }
            itemInput.value = ""; // Clears the input
        }
    
        // Event listeners for the buttons
        addButton.addEventListener("click", addItem);
        removeButton.addEventListener("click", removeItem);
    });