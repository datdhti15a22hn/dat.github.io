// Get references to DOM elements
const filterInput = document.getElementById("filterInput");
const itemList = document.getElementById("itemList");
const items = itemList.getElementsByTagName("li");

// Add an input event listener to the filter input
filterInput.addEventListener("input", filterItems);

// Function to filter the list of items
function filterItems() {
    const filter = filterInput.value.toLowerCase(); // Convert filter text to lowercase

    // Loop through the list of items
    for (let i = 0; i < items.length; i++) {
        const itemText = items[i].textContent.toLowerCase(); // Convert item text to lowercase

        // Check if the item text contains the filter text
        if (itemText.includes(filter)) {
            items[i].style.display = ""; // Show the item
        } else {
            items[i].style.display = "none"; // Hide the item
        }
    }
}
