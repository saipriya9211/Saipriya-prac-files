let bgContainerEl = document.createElement("div");
bgContainerEl.classList.add("bg-container");
document.body.appendChild(bgContainerEl);

let headingEl = document.createElement("h1");
headingEl.classList.add("heading");
headingEl.textContent = "Grocery List";
bgContainerEl.appendChild(headingEl);

let listContainerEl =  document.createElement("ul")
listContainerEl.classList.add("list-container");
bgContainerEl.appendChild(listContainerEl);

let groceryItems = ["Apple", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Choclates", "Pasta"];

for (let groceryItem of groceryItems){
    let listItemEl = document.createElement("li");
    listItemEl.textContent = groceryItem;
    listContainerEl.appendChild(listItemEl);
}