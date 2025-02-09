// Example list items
const listItems = [
    "Discuss project requirements",
    "Plan the next meeting",
    "Review the latest code changes"
];

const listArea = document.getElementById("listArea");
const newItemInput = document.getElementById("newItem");
const addItemButton = document.getElementById("addItem");
const removeItemsButton = document.getElementById("removeItems");

// Display list items
function displayListItems() {
    listArea.innerHTML = "";
    listItems.forEach((item, index) => {
        let listItem = document.createElement("div");
        listItem.classList.add("list-item");
        listItem.innerHTML = `
            <input type="checkbox" class="item-checkbox" data-index="${index}">
            <span>${item}</span>
        `;
        listArea.appendChild(listItem);
    });
}

displayListItems();

// Add new item
addItemButton.addEventListener("click", () => {
    console.log("Add button clicked"); // Debug log
    const newItem = newItemInput.value.trim();
    if (newItem) {
        console.log("Adding new item:", newItem); // Debug log
        listItems.push(newItem);
        newItemInput.value = "";
        displayListItems();
    } else {
        console.log("New item input is empty"); // Debug log
    }
});

// Remove selected items
removeItemsButton.addEventListener("click", () => {
    const checkboxes = document.querySelectorAll(".item-checkbox:checked");
    const indexesToRemove = Array.from(checkboxes).map(checkbox => parseInt(checkbox.dataset.index));
    indexesToRemove.sort((a, b) => b - a); // Sort in descending order
    indexesToRemove.forEach(index => listItems.splice(index, 1));
    displayListItems();
});
