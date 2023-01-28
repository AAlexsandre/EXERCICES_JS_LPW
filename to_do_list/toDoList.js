let button = document.querySelector("button");

button.addEventListener("click", function (event) {
    event.preventDefault();

    let taskValue = document.getElementById("task").value;
    addNewTask(taskValue);

    document.getElementById("task").value = "";
});

let taskCounter = 0;
let currentTask;

function addNewTask(taskValue) {
    checkInStorage(taskValue);
    createTask(taskValue);
}

function checkInStorage(taskValue){
    if (typeof (Storage) !== "undefined") {
        if (localStorage.getItem("tasks") === null) {
            localStorage.setItem("tasks", JSON.stringify([]));
        }
        let tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks.push(taskValue);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
}

function createTask(taskValue){
    let newTask = document.createElement("li");
    newTask.setAttribute("id", "task-" + taskCounter);
    taskCounter++;
    addTaskName(newTask, taskValue);
    addButtons(newTask);
    document.getElementById("tasks").appendChild(newTask);
}

function addTaskName(newTask, taskValue) {
    let div = document.createElement("div");

    let pin = document.createElement("img");
    pin.src = "6a2448a6.png"
    newTask.appendChild(pin);
    
    let span = document.createElement("span");

    let pin2 = document.createElement("img");
    pin2.src = "6a2448a6.png"
    newTask.appendChild(pin2);

    span.innerHTML = taskValue;
    div.appendChild(pin);
    div.appendChild(span);
    div.appendChild(pin2);
    newTask.appendChild(div);
}

function addButtons(newTask) {
    addDelete(newTask);
    addModify(newTask);
    addDone(newTask);
}

function addDelete(newTask){
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "DELETE";
    newTask.appendChild(deleteButton);

    erase(deleteButton);
}

function erase(deleteButton){
    deleteButton.addEventListener("click", function (e) {
        if(this.parentElement.parentElement.id == "tasks"){
            if (typeof (Storage) !== "undefined") {
                let tasks = JSON.parse(localStorage.getItem("tasks"));
                let taskValue = this.parentElement.firstChild.textContent;
                let index = tasks.indexOf(taskValue);
                tasks.splice(index, 1);
                localStorage.setItem("tasks", JSON.stringify(tasks));
            }
            e.target.parentNode.remove();
        } else if (this.parentElement.parentElement.id == "tasksDone"){
            if (typeof (Storage) !== "undefined") {
                let todos = JSON.parse(localStorage.getItem("todos"));
                let taskValue = this.parentElement.firstChild.textContent;
                let index = todos.indexOf(taskValue);
                todos.splice(index, 1);
                localStorage.setItem("todos", JSON.stringify(todos));
            }
            e.target.parentNode.remove();
        }

    });
}

function addModify(newTask){
    let modifyButton = document.createElement("button");
    modifyButton.innerHTML = "MODIFY";
    modifyButton.setAttribute("data-task", "task-" + taskCounter);
    newTask.appendChild(modifyButton);

    changeContent(modifyButton);
}

function changeContent(modifyButton){
    let modal = document.getElementById("modal");
    modifyButton.addEventListener("click", function () {
        let inputModify = document.getElementById("task-modify");
        let task = this.parentElement.firstChild.textContent;
        inputModify.value = task;
        currentTask = this.parentElement.firstChild;
        toggle(modal);
    });

    document.getElementById("save-modify").addEventListener("click", function () {
        let task = document.getElementById("task-modify").value;
        let tasks = JSON.parse(localStorage.getItem("tasks"));
        let taskValue = currentTask.textContent;
        let index = tasks.indexOf(taskValue);
        tasks[index] = task;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        currentTask.textContent = task;
        toggle(modal);
    });

    document.getElementById("close-modal").addEventListener("click", function () {
        toggle(modal);
    });
}

function addDone(newTask){
    let doneButton = document.createElement("button");
    doneButton.innerHTML = "DONE";
    newTask.appendChild(doneButton);

    done(doneButton);
}

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function done(doneButton){
    doneButton.addEventListener("click", function () {
        let done = this.parentElement.firstChild.children[1].innerHTML;
        document.getElementById("tasksDone").appendChild(this.parentElement);
        this.parentElement.children[2].remove();
        this.style.display = 'none';

        if (typeof (Storage) !== "undefined") {
            if (localStorage.getItem("todos") === null) {
                localStorage.setItem("todos", JSON.stringify([]));
            }
            let todos = JSON.parse(localStorage.getItem("todos"));
            todos.push(done);
            localStorage.setItem("todos", JSON.stringify(todos));

            let tasks = JSON.parse(localStorage.getItem("tasks"));
            let taskValue = this.parentElement.firstChild.textContent;
            let index = tasks.indexOf(taskValue);
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }

    });
}

function toggle(element) {
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}


window.addEventListener("load", displayTasks);

function displayTasks() {
    let taskValue;
    let newTask;
    if (typeof (Storage) !== "undefined") {
        if (localStorage.getItem("tasks") !== null) {
            let tasks = JSON.parse(localStorage.getItem("tasks"));
            for (let i = 0; i < tasks.length; i++) {
                let taskValue = tasks[i];
                let newTask = document.createElement("li");
                newTask.setAttribute("id", "task-" + taskCounter);
                taskCounter++;
                addTaskName(newTask, taskValue);
                addButtons(newTask);
                document.getElementById("tasks").appendChild(newTask);            
            }
        }
    }
    if (typeof (Storage) !== "undefined") {
        if (localStorage.getItem("todos") !== null) {
            let todos = JSON.parse(localStorage.getItem("todos"));
            for (let i = 0; i < todos.length; i++) {
                let taskValue = todos[i];
                let newTask = document.createElement("li");
                newTask.setAttribute("id", "task-" + taskCounter);
                taskCounter++;
                addTaskName(newTask, taskValue);
                addDelete(newTask);
                document.getElementById("tasksDone").appendChild(newTask);
            }
        }
    }
}
