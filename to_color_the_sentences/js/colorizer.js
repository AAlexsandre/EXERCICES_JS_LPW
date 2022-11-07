let button = document.getElementById("button_colorize").addEventListener("click", create_the_sentences_color);

/**
 * This function creates the span elements and adds a caracter inside wich them
 */
function create_the_sentences_color(event) {
    let colorized_id = document.getElementById("colorized")
    event.preventDefault();
    let remove_the_elements = colorized_id;
    cleanElement(remove_the_elements);  

    let input_value = document.getElementById("text").value;

    let new_span;
    let new_lettre;
    //take the id about the div
    let current_div = colorized_id;
    let current_color;
    let color_index = 0;

    for (let i = 0; i < input_value.length; ++i) {

        //create the element span
        new_span = document.createElement("span");

        if (input_value.charAt(i) != " ") {
            current_color = "color_" + (color_index % 3 + 1);

            //add the class
            new_span.classList.add(current_color);
            ++color_index;
        }

        //take the current lettre about the word
        new_lettre = document.createTextNode(input_value.charAt(i));

        //add the lettre inside the span
        new_span.appendChild(new_lettre);

        //add the span inside of div
        current_div.appendChild(new_span);

    }
}


function cleanElement(remove_the_elements){
    while (remove_the_elements.firstChild) {
        remove_the_elements.removeChild(remove_the_elements.firstChild);
    }
}