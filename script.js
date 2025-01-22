function addTask() {
    const taskInput = document.getElementById('taskInput');
    const todoList = document.getElementById('todoList');

    // Check if input is empty
    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    // Create task item container
    const taskItem = document.createElement('div');
    taskItem.className = 'todo-item';

    // Create task text
    const taskText = document.createElement('span');
    taskText.textContent = taskInput.value;
    taskItem.appendChild(taskText);

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function () {
        todoList.removeChild(taskItem);

        // Display message if list is empty
        if (!todoList.children.length) {
            todoList.innerHTML = '<p style="text-align: center; color: #aaa;">You haven\'t added any todos!</p>';
        }
    };
    taskItem.appendChild(deleteBtn);

    // Remove empty list message if present
    if (todoList.firstElementChild && todoList.firstElementChild.tagName === 'P') {
        todoList.innerHTML = '';
    }

    // Add task to the list
    todoList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = '';
}
