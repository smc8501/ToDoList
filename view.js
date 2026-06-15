
let taskListGrid;


export function renderTaskList() {
       const gridOptions = {
            columnDefs: [
            {   
                headerName: "Task",
                field: "text",
                editable: true,
            },
            {   
                headerName: "Done",
                field: "completed",
                editable: true,
                width: 10,
                cellRenderer: 'agCheckboxCellRenderer',
                cellEditor: 'agCheckboxCellEditor'
            }],
            
            defaultColDef: {
                flex: 1,
            },
            rowData: [],
            // rowDefs: {flex: 1}

        };
        
        taskListGrid = agGrid.createGrid(taskList, gridOptions);
}


export function renderTask(tasks) {
    
    // taskList.innerHTML = "";
    // tasks.forEach((task, index) => {
    //     const taskContainer = document.createElement("div");
        
    
    //     taskContainer.innerHTML = `
    //         <input type="checkbox" ${task.completed ? "checked" : ""}>
    //         <p>${task.text}</p>
    //     `;
        // taskContainer.querySelector("input").addEventListener("change", () => onToggle(index));


    //     taskList.appendChild(taskContainer);
    // });
    taskListGrid.setGridOption("rowData", tasks);

    
}


