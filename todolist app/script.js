// 1. Select required elements (only elements, no values)
const input = document.querySelector(".inputvalue");
const addButton = document.querySelector(".addButton");
const taskList = document.querySelector(".task-list");

// 2. Listen for button click
addButton.addEventListener("click", () => {
  // 3. Read input value at the moment of click
  const value = input.value.trim();

  // 4. Prevent empty tasks
  if (value === "") return;

  // 5. Create a new list item
  const li = document.createElement("li");

  // 6. Add content to the list item
  li.innerHTML = `
    <span>${value}</span>
    <button>Delete</button>
  `;

  // 7. Add delete functionality
  li.querySelector("button").addEventListener("click", () => {
    li.remove();
  });

  // 8. Attach task to the list
  taskList.appendChild(li);

  // 9. Clear input
  input.value = "";
});
