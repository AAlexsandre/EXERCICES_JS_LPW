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
    let newTask = document.createElement("li");
    newTask.setAttribute("id", "task-" + taskCounter);
    taskCounter++;
    newTask.innerHTML = taskValue;

    addButtons(newTask);

    document.getElementById("tasks").appendChild(newTask);
}

function addButtons(newTask) {
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("btn");
    deleteButton.classList.add("btn-danger");
    deleteButton.innerHTML = "Delete";
    newTask.appendChild(deleteButton);

    deleteButton.addEventListener("click", function (e) {
        e.target.parentNode.remove();
    });

    let modifyButton = document.createElement("button");
    modifyButton.classList.add("btn");
    modifyButton.classList.add("btn-warning");
    modifyButton.innerHTML = "Modify";
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
        // let taskId = document.getElementById("modal-content").previousElementSibling.getAttribute("data-task");
        console.log(document.getElementById("modal-content").parentElement.parentElement);
        currentTask.textContent = task;
        toggle(modal);
    });
    

    document.getElementById("close-modal").addEventListener("click", function () {
        toggle(modal);
    });



    let doneButton = document.createElement("button");
    doneButton.classList.add("btn");
    doneButton.classList.add("btn-success");
    doneButton.innerHTML = "Done";
    newTask.appendChild(doneButton);

    doneButton.addEventListener("click", function () {
        this.parentElement.classList.add("strike");
        document.getElementById("tasksDone").appendChild(this.parentElement);
    });

}

function toggle(element) {
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}
