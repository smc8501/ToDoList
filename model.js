
function createTask(text) {
    return {
        text,
        completed: false
    };
}

function addTask(tasks, task) {
    if (!text.trim()) return tasks;

    return [...tasks, createTask(text)];
}

function toggleTask(tasks, index) {
    return tasks.map((task, i) => 
    i === index ? { ...task, completed: !task.completed } : task);
}
function clearCompletedTask(tasks) {
    return tasks.filter(task => !task.completed);
}

module.exports = { addTask, toggleTask, clearCompletedTask }