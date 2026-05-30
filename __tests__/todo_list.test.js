const { addTask, displayTask, toggleTask, clearCompletedTasks } = require("../todo_list");


describe(addTask, () => {
    let tasks;
    let taskInput;

    beforeEach(() => {
        tasks = [];

        document.body.innerHTML = `
        <input id="taskInput" />`;

        taskInput = document.getElementById('taskInput');
    });
    test("display a task to the task array", () => {
        taskInput.value = 'Buy milk';

        addTask();

        expect(tasks).toHaveLength(1);


    });
}) 