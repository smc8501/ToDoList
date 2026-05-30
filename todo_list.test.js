const  { addTask }  = require('./todo_list');
console.log(addTask);

describe('addTask', () => {

    let tasks;
    let taskInput;

    beforeEach(() => {
        tasks = [];
        document.body.innerHTML = `
            <input id="taskInput" />
        `;

        taskInput = document.getElementById('taskInput');
    });

    test('adds a task when input is not empty', () => {

        taskInput.value = 'Buy milk';
        
        addTask(tasks, taskInput);
        
        expect(tasks).toEqual([
            { text: 'Buy milk'}
        ]);
    });

    test('clears the input after adding a task', () => {

        taskInput.value = 'Buy milk';

        addTask(tasks, taskInput);

        expect(taskInput.value).toBe('');
    });

    test('does not add an empty task', () => {

        taskInput.value =  '    ';

        addTask(tasks, taskInput);

        expect(tasks)
        .toHaveLength(0)
        .toThrow('Task cannot be empty');
        
    }); 

    test('trims whitespace before adding the task', () => {

        taskInput.value = '   Buy   milk   ';

        addTask(tasks, taskInput);

        expect(tasks).toBeEqual([
            {text: 'Buy milk'}
        ]);

    });

    test('returns a list with one more item', () => {

        tasks.text = 'Buy milk';

        taskInput.value = 'Walk the dog';

        addTask(tasks, taskInput);

        expect(tasks).toHaveLength(2);

    });
    
    test('does not modify the original array', () => {

        tasks.text = 'Buy milk';

        taskInput.value = 'Walk the dog';

        addTask(tasks, taskInput);

        expect(tasks).toBe(
            {text: ['Buy milk']}
        );
    });

});

