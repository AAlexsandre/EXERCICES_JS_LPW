let addNewLi = document.getElementById("button").addEventListener("click", createTheLine);
let increment = 0;
let test = [];

loadLocalStorageTask();

function loadLocalStorageTask() {
    for (let i = 0; i < localStorage.length; ++i) {
        createElements(i);
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
        localStorage.removeItem(e.target.parentNode.id);
        e.target.parentNode.remove();
        
    });

    return deleteButton;
}

/**
 * @return modifyButton;
 */
function createActionableModify() {
    let modifyButton = document.createElement("button");
    modifyButton.setAttribute("class", "modify");
    modifyButton.innerText = "Modify";

    modifyButton.addEventListener("click", function (e) {

        //mettre la donnée dans l'input
        loadEditForm(this.parentElement.getElementsByTagName("span")[0]);

        //afficher le formulaire d'édition
        show('editForm');

        //Ajouter un actionListener sur le boutton editSubmit
        let submit = document.getElementById('editSubmit');
        submit.addEventListener('click', function (e) {
            e.preventDefault();
            updateTaskContent();
            hide('editForm');
        });
    });

    return modifyButton;
}

/**
 * @return doneButton;
 */
function createActionableDone() {
    let doneButton = document.createElement("button");
    doneButton.setAttribute("class", "done");
    doneButton.innerText = "Done";

    doneButton.addEventListener("click", function () {
        this.parentElement.style.textDecoration = "line-through";
        document.getElementById("listDone").appendChild(this.parentElement);
    });

    return doneButton;
}


function loadEditForm(task) {
    document.getElementById("editContent").value = task.textContent;
    document.getElementById("editId").value = task.getAttribute('id');
}


function show(id) {
    let form = document.getElementById(id);
    form.style.display = "flex";
}

function hide(id) {
    let form = document.getElementById(id);
    form.style.display = "none";
}


function updateTaskContent() {
    let content = document.getElementById('editContent').value;
    let id = document.getElementById("editId").value;
    // assigner l'input
    document.getElementById(id).textContent = content;
}

function createTheLine(event) {
    event.preventDefault();

    let taskContent = document.getElementById("text").value;
    // add task to UI
    let newLi = document.createElement("li");
    newLi.setAttribute("id", increment);

    let newSpan = document.createElement("span");
    newSpan.setAttribute("id", "elementNumber" + increment);
    newSpan.innerText = taskContent;

    newLi.appendChild(newSpan);
    newLi.appendChild(createActionableDelete());
    newLi.appendChild(createActionableModify());
    newLi.appendChild(createActionableDone());

    position = document.getElementById("listNotDone");
    position.appendChild(newLi);

    // clear The Input
    document.getElementById("text").value = "";

    // add task to storage
    localStorage.setItem(increment, taskContent);

    ++increment;
}

function createElements(i){
    let createLi = document.createElement("li");
    let createSpan = document.createElement("span");

    createLi.appendChild(createSpan);
    createSpan.textContent = localStorage.getItem(i);
    createSpan.setAttribute("id", "elementNumber" + increment);
    createLi.setAttribute("id", increment);

    createLi.appendChild(createActionableDelete());
    createLi.appendChild(createActionableModify());
    createLi.appendChild(createActionableDone());

    document.getElementById("listNotDone").appendChild(createLi);
}