const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");


let tasks = [];

function  displayTask() {
    taskList.innerHTML ="";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
        <label for ="task=${index}">${task.text}</label>`;
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);
    });
}

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({text: taskText, completed: false});
        taskInput.value = "";
        displayTask();
    };
}


// This function changes the completion status of a task in the tasks array based on the provided index.
function toggleTask (index) {
    tasks[index].completed = !tasks[index].completed;
    displayTask();

}
// the filter method filters the task array to retrieve only the tasks that are not marked
//  as completed, which in turn returns a new array excluding completed tasks.
function clearCompletedTasks () {
    tasks = tasks.filter(task => !task.completed);
    displayTask();
}
addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);

displayTask();

module.exports = {  addTask, displayTask, toggleTask, clearCompletedTasks}