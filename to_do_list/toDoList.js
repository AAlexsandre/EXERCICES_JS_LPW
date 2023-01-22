let button = document.querySelector("button");
// let inc = 0;

button.addEventListener("click", function (event) {
    event.preventDefault();

    let taskValue = document.getElementById("task").value;
    addNewTask(taskValue);

    document.getElementById("task").value = "";
});

let taskCounter = 0;
let currentTask;

function addNewTask(taskValue) {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.getItem("tasks") === null) {
            localStorage.setItem("tasks", JSON.stringify([]));
        }
        let tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks.push(taskValue);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    let newTask = document.createElement("li");
    newTask.setAttribute("id", "task-" + taskCounter);
    taskCounter++;
    addTaskName(newTask, taskValue);
    addButtons(newTask);
    document.getElementById("tasks").appendChild(newTask);
}


function addTaskName(newTask, taskValue) {
    let div = document.createElement("div");
    div.innerHTML = taskValue;
    newTask.appendChild(div);
}

function addButtons(newTask) {
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "DELETE";
    newTask.appendChild(deleteButton);

    deleteButton.addEventListener("click", function (e) {
        if (typeof (Storage) !== "undefined") {
            let tasks = JSON.parse(localStorage.getItem("tasks"));
            let taskValue = this.parentElement.firstChild.textContent;
            let index = tasks.indexOf(taskValue);
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
        e.target.parentNode.remove();
    });

    let modifyButton = document.createElement("button");
    modifyButton.innerHTML = "MODIFY";
    modifyButton.setAttribute("data-task", "task-" + taskCounter);
    newTask.appendChild(modifyButton);

    modifyButton.addEventListener("click", function () {
        let modal = document.getElementById("modal");
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



    let doneButton = document.createElement("button");
    doneButton.innerHTML = "DONE";
    newTask.appendChild(doneButton);

    doneButton.addEventListener("click", function () {

        document.getElementById("tasksDone").appendChild(this.parentElement);
        this.parentElement.children[2].remove();
        this.parentElement.removeChild(this);
        // let taskDone = document.getElementById("tasksDone").children[inc].childNodes[0].innerHTML;

        // if (typeof (Storage) !== "undefined") {
        //     if (localStorage.getItem("tasksDone") === null) {
        //         localStorage.setItem("tasksDone", JSON.stringify([]));
        //     }
        //     let tasks = JSON.parse(localStorage.getItem("tasksDone"));
        //     tasks.push(taskDone);
        //     localStorage.setItem("tasksDone", JSON.stringify(tasks));
        // }

        // ++inc;

    });

}

function toggle(element) {
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}


window.addEventListener("load", function () {
    displayTasks();
});

function displayTasks() {
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
}
