const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");


let tasks = [];

const addTask = () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({text: taskText});
        taskInput.value = "";
        displayTasks();
    }
}

const displayTask = () => {
    taskList.innerHTML ="";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
        <label for ="task=${index}">${task.text}</label>`;
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);
    });
}
// This function changes the completion status of a task in the tasks array based on the provided index.
const toggelTask = (index) => {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();

}
addTaskBtn.addEventListener("click", addTask);