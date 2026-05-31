
import { addTask, toggleTask, clearCompletedTask } from './model.js';
import { renderTask } from './view.js';

function ToDoApp() {
    let tasks = [];

    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
    const clearBtn = document.getElementById("clearCompletedBtn");

   


    function update() {
        renderTask(tasks, taskList, handleToggle);
    }
     function handleToggle(index) {
        tasks = toggleTask(tasks, index);
        update();

    }

    function handleAdd() {
        tasks = addTask(tasks, taskInput.value);
        taskInput.value = "";
        update();
    }

    function handleClear() {
        tasks = clearCompletedTask(tasks);
        update();
    }

    addTaskBtn.addEventListener("click", handleAdd);
    clearBtn.addEventListener("click", handleClear);

    update();


};
ToDoApp();



