const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");


let tasks = [];

function addTask (tasks, taskInput) {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        tasks.push({text: taskText});
        taskInput.value = "";
        // displayTasks();
    }
    throw new Error('Task cannot be empty');
}

// addTaskBtn.addEventListener("click", addTask);

module.exports = { addTask };