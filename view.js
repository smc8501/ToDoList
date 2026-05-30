function renderTask(tasks, taskList,onToggle) {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <input type="checkbox" ${task.completed ? "checked" : ""}>
            <label>${task.text}</label>
        `;
        li.querySelector("input").addEventListener("change", () => onToggle(index));

        taskList.appendChid(li);
    });
}