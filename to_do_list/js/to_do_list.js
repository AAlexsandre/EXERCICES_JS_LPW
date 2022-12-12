let button = document.querySelector("#newTask button");
let tabKeysFromStorage = new Array();
let tabValuesFromStorage = new Array();

button.addEventListener("click", function (event) {
    event.preventDefault();

    let lastKey = document.getElementById('lastKey').value;

    if (lastKey == "") {
        lastKey = 0;
    }

    document.getElementById('lastKey').value = ++lastKey;


    let taskName = document.getElementById("text").value;

    let listId = "listNotDone";

    addTaskToList(taskName, listId, lastKey);
    addTaskToStorage(taskName, listId, lastKey);


    // clear The Input
    document.getElementById("text").value = "";
});

let lastKey = displayTasksFromStorage();
document.getElementById('lastKey').value = lastKey;

function displayTasksFromStorage() {
    if (localStorage.length == 0) {
        return 0;
    }

    let lastKey;

    for (let i = 0; i < localStorage.length; ++i) {
        lastKey = localStorage.key(i);
        tabKeysFromStorage[i] = localStorage.key(i);
        tabValuesFromStorage[i] = localStorage.getItem(tabKeysFromStorage[i]);
    }
    tabKeysFromStorage.sort()
    console.log(tabValuesFromStorage);

    for (let j = 0; j < tabKeysFromStorage.length; ++j) {
        if(tabValuesFromStorage[j].charAt(tabValuesFromStorage[j].length-1) == "#"){
            addTaskToList(localStorage.getItem(tabKeysFromStorage[j]), 'listDone', j);
        } else {
            addTaskToList(localStorage.getItem(tabKeysFromStorage[j]), 'listNotDone', j);
        }
    }

    return lastKey;
}

function addTaskToList(taskName, listId, lastKey) {

    // add task to UI
    let newLi = document.createElement("li");
    newLi.setAttribute("id", lastKey);

    let newSpan = document.createElement("span");
    newSpan.innerText = taskName;

    newLi.appendChild(newSpan);
    newLi.appendChild(createActionableDelete());
    newLi.appendChild(createActionableModify());
    newLi.appendChild(createActionableDone());

    list = document.getElementById(listId);
    list.appendChild(newLi);
}

function addTaskToStorage(taskName, listId, lastKey) {
    localStorage.setItem(lastKey, taskName);
}

function removeTaskFromList(e) {
    e.target.parentNode.remove();
}

function removeTaskFromStorage(e) {
    let taskId = e.target.parentNode.getAttribute("id");
    localStorage.removeItem(taskId);

    if (document.getElementById("listNotDone").childNodes.length == 0) {
        localStorage.clear();
    }
}

/**
 * @return deleteButton;
 */
function createActionableDelete() {
    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "delete");
    deleteButton.innerText = "Delete";

    deleteButton.addEventListener("click", function (e) {
        removeTaskFromList(e);
        removeTaskFromStorage(e);

    });

    return deleteButton;
}


/**
 * @return modifyButton;
 */
function createActionableModify() {
    modifyButton = document.createElement("button");
    modifyButton.setAttribute("class", "modify");
    modifyButton.innerText = "Modify";

    modifyButton.addEventListener("click", function (e) {

        loadEditForm(this.parentElement.getElementsByTagName("span")[0]);

        let form = document.getElementById("editForm");

        toggle(form);

        //Ajouter un actionListener sur le boutton editSubmit
        let submit = document.getElementById('editSubmit');
        submit.addEventListener('click', function (e) {
            e.preventDefault();
            modifyContent();
        }, { once: true });
    });

    return modifyButton;
}

/**
 * @return doneButton;
 */
function createActionableDone() {
    let doneButton = document.createElement("button");
    doneButton.innerText = "Done";

    doneButton.addEventListener("click", function () {
        document.getElementById("listDone").appendChild(this.parentElement);
        tabValuesFromStorage[this.parentElement.id] = tabValuesFromStorage[this.parentElement.id]+"#";
        localStorage.setItem(tabKeysFromStorage[this.parentElement.id], tabValuesFromStorage[this.parentElement.id]+"#");
    });

    return doneButton;
}


function loadEditForm(task) {
    document.getElementById("editContent").value = task.textContent;
    document.getElementById("editId").value = task.getAttribute('id');
}

function modifyContent() {
    let content = document.getElementById("editContent").value;

    let id = document.getElementById("editId").value;

    // assigner l'input
    document.getElementById(id).textContent = content;

    document.getElementById("editSubmit").addEventListener("click", function () {
        toggle(document.getElementById("editForm"));
    });
}

function appendToTheList(event) {
    event.preventDefault();

    let taskContent = document.getElementById("text").value;
    // add task to UI
    let newLi = document.createElement("li");
    newLi.setAttribute("id", lastKey);

    let newSpan = document.createElement("span");
    newSpan.setAttribute("id", "elementNumber" + lastKey);
    newSpan.innerText = taskContent;

    newLi.appendChild(newSpan);
    newLi.appendChild(createActionableDelete());
    newLi.appendChild(createActionableModify());
    newLi.appendChild(createActionableDone());

    position = document.getElementById("listNotDone");
    position.appendChild(newLi);

    // clear The Input
    document.getElementById("text").value = "";
    ++lastKey;
}

function toggle(form) {
    if (form.style.display == "flex") {
        form.style.display = "none";

    } else {
        form.style.display = "flex";
    }
}