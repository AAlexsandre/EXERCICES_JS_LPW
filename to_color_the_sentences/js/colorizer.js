let button = document.getElementById("button_colorize").addEventListener("click", create_the_sentences_color);
let colorised_id = document.getElementById("colorized");

/**
 * This function creates the span elements and adds a caracter inside wich them
 */
function create_the_sentences_color(event) {
    event.preventDefault();
    let remove_the_elements = colorised_id;
    cleanElement(remove_the_elements);

    let input_value = document.getElementById("text").value;
    let colour_index = 0;

    colorise(input_value, colour_index);
}


/**
 * This function cleans the all elements
 * @param {String} remove_the_elements 
 */
function cleanElement(remove_the_elements) {
    while (remove_the_elements.firstChild) {
        remove_the_elements.removeChild(remove_the_elements.firstChild);
    }
}


/**
 * This function add the elements with the colors
 * @param {String} text 
 * @param {number} color 
 */
function colorise(text, color) {
    let new_span;
    let new_lettre;

    //take the id about the div
    let current_div = colorised_id;
    let current_colour;
    for (let i = 0; i < text.length; ++i) {

        //create the element span
        new_span = document.createElement("span");

        if (text.charAt(i) != " ") {
            current_colour = "color_" + (color % 3 + 1);

            //add the class
            new_span.classList.add(current_colour);
            ++color;
        }

        //take the current lettre about the word
        new_lettre = document.createTextNode(text.charAt(i));

        //add the lettre inside the span
        new_span.appendChild(new_lettre);

        //add the span inside of div
        current_div.appendChild(new_span);

    }
}