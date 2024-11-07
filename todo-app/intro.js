const mainTodoElem = document.querySelector('.todo-lists-elem');
const inputValue = document.getElementById('inputValue');

// Function to get todos from local storage
const getTodoList = () => {
    return JSON.parse(localStorage.getItem("Todo")) || [];
}

// Initialize the todo list array from local storage
let localTodoLists = getTodoList();

// Function to create a todo div dynamically and append it
const addTodoDynamic = (curElem) => {
    const divele = document.createElement("div");
    divele.classList.add('main_todo_div');
    divele.innerHTML = `<li>${curElem}</li> <button class="deletebtn">Delete</button>`;
    
    // Delete button functionality
    divele.querySelector('.deletebtn').addEventListener('click', () => {
        deleteTodoItem(curElem);
    });

    mainTodoElem.append(divele);
}

// Function to save todos to local storage
const saveTodoList = () => {
    localStorage.setItem("Todo", JSON.stringify(localTodoLists));
}

// Function to delete a todo item
const deleteTodoItem = (item) => {
    // Filter out the item to be deleted
    localTodoLists = localTodoLists.filter(todo => todo !== item);
    saveTodoList(); // Update local storage
    displayTodos(); // Refresh displayed list
}

// Function to display all todos
const displayTodos = () => {
    mainTodoElem.innerHTML = ''; // Clear current display
    localTodoLists.forEach((element) => {
        addTodoDynamic(element);
    });
}

// Function to add a new todo item
const addTodoList = (e) => {
    e.preventDefault();
    const todoItem = inputValue.value.trim();

    // Check if the input is not empty and is not a duplicate
    if (todoItem && !localTodoLists.includes(todoItem)) {
        // Add the item to the list
        localTodoLists.push(todoItem);
        saveTodoList(); // Save updated list to local storage
        addTodoDynamic(todoItem); // Add the new todo to display

        // Clear input field after adding the item
        inputValue.value = '';
    } else if (localTodoLists.includes(todoItem)) {
        alert("This item is already in the list!");
    }
}

// Add event listener to button for adding todo items
document.querySelector('.btn').addEventListener('click', addTodoList);

// Display initial todos on page load
displayTodos();

