const  { addTask, toggleTask, clearCompletedTask } = require ('../model');

describe('todo model', () => {
    test('adds a task', () => {

        const tasks = [];

        const result = addTask(tasks, 'Buy milk');

        expect(result).toEqual([
            {text: 'Buy milk', completed: false}
        ]);
    });
    test('does not mutate original array', () => {
        
        const tasks = [];

        addTask(tasks, 'Buy milk');

        expect(tasks).toEqual([]);
    });
    test('toggles task', () => {
        
        const tasks = [{text: 'Buy milk, completed: false'}];

        const result = toggleTask(tasks,0);

        expect(result[0].completed).toBe(true);
    });
    test('clears completed tasks', () => {
        
        const tasks = [
            {text: 'A', completed: true},
            {text: 'B', completed: false}
        ];

        const result = clearCompletedTask(tasks);

        expect(result).toEqual([
            {text: 'B', completed: false}
        ]);
    });
});