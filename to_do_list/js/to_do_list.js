//To recup the data
let inputText = document.getElementById("text");
let toDoList = document.getElementById("list");

let button = document.getElementById("button").addEventListener("click", add_to_the_list);

function add_to_the_list(event) {
    event.preventDefault();

    //to create the elemnts
    //1
    let addElementLi = document.createElement("li");
    let addElementSpan = document.createElement("span");

    //2
    addElementSpan.innerText = inputText.value;

    //3
    let delete_button = document.createElement("button");
    delete_button.setAttribute("class","delete");

    let modify_button = document.createElement("button");
    modify_button.setAttribute("class","modify");

    let done_button = document.createElement("button");
    done_button.setAttribute("class","done");

    delete_button.innerText = "Delete";
    delete_button.addEventListener("click", function () {
        toDoList.removeChild(addElementLi);
    });

    modify_button.innerText = "Modify?";
    done_button.innerText = "Done";

    done_button.addEventListener("click", function () {
        addElementLi.style.textDecoration = "line-through";
        toDoList.appendChild(addElementLi);
        done_button.innerText = "Not done";
    });

    done_button.addEventListener("dblclick", function () {
        addElementLi.style.textDecoration = "none";
        done_button.innerText = "done";
    });

    addElementLi.appendChild(addElementSpan);
    let test = document.createElement("div");
    test.appendChild(delete_button);
    test.appendChild(modify_button);
    test.appendChild(done_button);
    addElementLi.appendChild(test);

    toDoList.appendChild(addElementLi);

    clear_the_input();
}

function clear_the_input() {
    document.getElementById("text").value = "";
}