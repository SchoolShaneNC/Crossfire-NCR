const comboBox = document.getElementById("comboBox");

    const companies = [
    "Jim's Warehouse",
    "Parts Unlimited",
    "Acme Components",
    "TechParts Co.",
    "Precision Supplies",
    "Allied Assemblies",
    "Bolt & Gear Depot",
    "National PartSource",
    "Vertex Supplies Inc.",
    "Quantum Components",
    "BuildWare Solutions",
    "NextGen Supply Co.",
    "Reliable Parts Hub",
    "SteelWorks Distribution",
    "Core Components LLC"
    ];


    function populateComboBox() {
        companies.forEach(companie => {
            const option = document.createElement("option");
            option.value = companie.toLowerCase();
            option.textContent = companie;
            comboBox.appendChild(option);
        });
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
                alert(`"${newItem}" has been added.`);
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