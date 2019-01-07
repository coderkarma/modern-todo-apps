// Fetching existing todos from local storage
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos');
    if (todosJSON !== null) {
        return JSON.parse(todosJSON);
    } else {
        return [];
    }
}

// Save todos to local storage
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Remove todo Id
const removeTodo = function (id) {
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id === id;
    });
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1);
    }
}

// Toggle the completed value for a given todo 
const toggleTodo = function (id){
   const todo = todos.find(function (todo){
       return todo.id === id;
   })

   if (todo !== undefined ){
      todo.completed = !todo.completed;
   }
}


// Render application todos based on filter
const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

        return searchTextMatch && hideCompletedMatch;
    })

    const incompleteTodos = filteredTodos.filter(todo => !todo.completed);
    // clear the div before rendering things
    document.querySelector('#todos').innerHTML = '';
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos));

    filteredTodos.forEach((todo) => {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo));
    })
}

// Get the DOM element for individual note
const generateTodoDOM = function (todo) {
    const todoEl = document.createElement('div');
    const checkbox = document.createElement('input');
    const todoText = document.createElement('span');
    const removeButton = document.createElement('button');

    // Setup todo checkbox
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = todo.completed;
    todoEl.appendChild(checkbox);
    // Event handler for checkbox
    checkbox.addEventListener('change', () => {
        toggleTodo(todo.id);
        saveTodos(todos);
        renderTodos(todos, filters);
    });

    // Setup a  `the todo text;
    todoText.textContent = todo.text;
    todoEl.appendChild(todoText);

    // Setup the remove button
    removeButton.textContent = 'x';
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id);
        saveTodos(todos);
        renderTodos(todos, filters);
    });

    return todoEl;
}

// Get the DOM elements for list summary
const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement('h2');
    summary.textContent = `you have ${incompleteTodos.length} todos left.`;
    return summary
}