
function createTask(text) {
    return {
        text,
        completed: false
    };
}

export function addTask(tasks, text) {
    if (!text.trim()) return tasks;

    return [...tasks, createTask(text)];
}

export function toggleTask(tasks, index) {
    return tasks.map((task, i) => 
    i === index ? { ...task, completed: !task.completed } : task);
}
export function clearCompletedTask(tasks) {
    return tasks.filter(task => !task.completed);
}

