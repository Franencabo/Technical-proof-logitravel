// Define UI Vars
const form = document.querySelector(".prompt--form");
const addBtn = document.querySelector("#add-button")
const boxList = document.querySelector(".box--list");
const lastChange = document.querySelector("#last-change");
const input = document.querySelector("#add-input");
const clearBtn = document.querySelector("#delete");

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
  // DOM load event
  document.addEventListener('DOMContentLoaded', getItems);
  // Add item event
  addBtn.addEventListener("click", addItem);
  // Remove item event
  boxList.addEventListener("doubleclick", removeItem);
  // Remove last item event
  lastChange.addEventListener("click",  removeLastItem);
  // Clear item event
  clearBtn.addEventListener("click", clearItems);

}

// Get Items from local storage
function getItems(){
  let items;
  if(localStorage.getItem('items') === null) {
    items = [];
  } else {
    items = JSON.parse(localStorage.getItem('items'));
  }
  items.forEach(function(item){
    // Create li element
  const li = document.createElement("li");
  // Add class
  li.className = "box--list__item";
 
 
  // Create new link element
  const link = document.createElement("a");
 
  // Append the link to li
  li.appendChild(link);
   // Create text node and appen to li
  link.appendChild(document.createTextNode(item));

  // Append the li to ul
  boxList.appendChild(li);
  })
}

// Add item
function addItem(e) {
  if (input.value === "") {
    alert("Not allowed empty items");
  }

  // Create li element
  const li = document.createElement("li");
  // Add class
  li.className = "box--list__item";
  
  // Create new link element
  const link = document.createElement("a");
  
  // Append the link to li
  li.appendChild(link);
  // Create text node and appen to li
  link.appendChild(document.createTextNode(input.value));

  // Append the li to ul
  boxList.appendChild(li);


  // Before than you can clear the input, we store in local storage
  storeItemsInLocalStorage(input.value);
  // Clear input
  input.value = "";

  e.preventDefault();

  console.log(li);
}

// Store item

function storeItemsInLocalStorage(item){
  let items;
  if(localStorage.getItem('item') === null) {
    items = [];
  } else {
    items = JSON.parse(localStorage.getItem('items'));
  }
  items.push(item);

  localStorage.setItem('items', JSON.stringify(items));
}


// Remove only last item
function removeLastItem() {

  while (boxList.lastChild) {
    boxList.lastChild.remove();
  }
 

}



// Remove item
function removeItem(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
      e.target.parentElement.parentElement.remove();
      // Remove from LS
      removeItemFromLocalStorage(e.target.parentElement.parentElement);
  }
}

// Remove from local storage
function removeItemFromLocalStorage(item){
  let items;
  if(localStorage.getItem('items') === null) {
    items = [];
  } else {
    items = JSON.parse(localStorage.getItem('item'));
  }
  items.forEach(function(item, index){
    if(item.textContent === item){
      items.splice(index, 1);
    }
  });
  localStorage.setItem('items', JSON.stringify(items));
}

// Clear items
function clearItems() {

  // Faster
  while (boxList.firstChild) {
    boxList.removeChild(boxList.firstChild);
  }

  // Clear from local storage
  clearItemsFromLocalStorage();
}

// Clear items from local storage
function clearItemsFromLocalStorage(){
  localStorage.clear();
}
