let button = document.getElementById("button_colorize").addEventListener("click", create_the_sentences_color);


/**
 * This function creates the span elements and adds a caracter inside wich them
 */
function create_the_sentences_color() {

    let remove_the_elements = document.getElementById("colorized");

    while (remove_the_elements.firstChild) {
        remove_the_elements.removeChild(remove_the_elements.firstChild);
    }

    let input_form = document.getElementById("text").value;

    let new_span;
    let new_lettre;
    let current_div;

    for (let i = 0; i < input_form.length; ++i) {

        //create the element span
        new_span = document.createElement("span");

        //add the class
        new_span.classList.add("color_" + (i % 3 + 1));

        //take the current lettre about the word
        new_lettre = document.createTextNode(input_form.charAt(i));

        //add the lettre inside the span
        new_span.appendChild(new_lettre);

        //take the id about the div
        current_div = document.getElementById("colorized");

        //add the span inside of div
        current_div.appendChild(new_span);
    }
}