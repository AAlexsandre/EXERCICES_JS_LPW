//To recup the data
let input_text = document.getElementById("text");
let to_do_list = document.getElementById("list");


let button = document.getElementById("button").addEventListener("click", add_to_the_list);

function add_to_the_list(event) {
    event.preventDefault();

    //to create the elemnts
    //1
    let add_element = document.createElement("li");
    let test = document.createElement("span");

    //2
    test.innerText = input_text.value;

    //3
    let delete_button = document.createElement("button");
    delete_button.setAttribute("class","delete");

    let modify_button = document.createElement("button");
    modify_button.setAttribute("class","modify");

    let done_button = document.createElement("button");
    done_button.setAttribute("class","done");

    delete_button.innerText = "Delete";
    delete_button.addEventListener("click", function () {
        to_do_list.removeChild(add_element);
    });

    modify_button.innerText = "Modify?";
    done_button.innerText = "Done";

    done_button.addEventListener("click", function () {
        add_element.style.textDecoration = "line-through";
        to_do_list.appendChild(add_element);
        done_button.innerText = "Not done";
    });

    done_button.addEventListener("dblclick", function () {
        add_element.style.textDecoration = "none";
        done_button.innerText = "done";
    });

    add_element.appendChild(test);
    add_element.appendChild(delete_button);
    add_element.appendChild(modify_button);
    add_element.appendChild(done_button);
    to_do_list.appendChild(add_element);

    clear_the_input();
}

function clear_the_input() {
    document.getElementById("text").value = "";
}