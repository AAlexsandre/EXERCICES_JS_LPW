//To recup the data
let input_text = document.getElementById("text");
let to_do_list = document.getElementById("list");


let button = document.getElementById("button").addEventListener("click", add_to_the_list);

function add_to_the_list(event) {
    event.preventDefault();

    //to create the elemnts
    //1
    let add_element_li = document.createElement("li");
    let add_element_span = document.createElement("span");

    //2
    add_element_span.innerText = input_text.value;

    //3
    let delete_button = document.createElement("button");
    delete_button.setAttribute("class","delete");

    let modify_button = document.createElement("button");
    modify_button.setAttribute("class","modify");

    let done_button = document.createElement("button");
    done_button.setAttribute("class","done");

    delete_button.innerText = "Delete";
    delete_button.addEventListener("click", function () {
        to_do_list.removeChild(add_element_li);
    });

    modify_button.innerText = "Modify?";
    done_button.innerText = "Done";

    done_button.addEventListener("click", function () {
        add_element_li.style.textDecoration = "line-through";
        to_do_list.appendChild(add_element_li);
        done_button.innerText = "Not done";
    });

    done_button.addEventListener("dblclick", function () {
        add_element_li.style.textDecoration = "none";
        done_button.innerText = "done";
    });

    add_element_li.appendChild(add_element_span);
    add_element_li.appendChild(delete_button);
    add_element_li.appendChild(modify_button);
    add_element_li.appendChild(done_button);
    to_do_list.appendChild(add_element_li);

    clear_the_input();
}

function clear_the_input() {
    document.getElementById("text").value = "";
}