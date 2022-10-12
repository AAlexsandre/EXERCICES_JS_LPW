let new_span;
let new_number1;
let new_number2;
let new_number3;
let current_div;
let hours = new Date;
let minutes = new Date;
let seconds = new Date;

for (let i = 0; i < 1; ++i) {

    //create the element span
    new_span = document.createElement("span");

    //add the class
    new_span.classList.add("color_" + (i % 3 + 1));

    //take the current lettre about the word
    new_number1 = document.createTextNode(hours.getHours());
    new_number2 = document.createTextNode(minutes.getMinutes());
    new_number3 = document.createTextNode(seconds.getSeconds());

    //add the lettre inside the span
    new_span.appendChild(new_number1);
    new_span.appendChild(new_number2);
    new_span.appendChild(new_number3);

    //take the id about the div
    current_div = document.getElementById("clock");

    //add the span inside of div
    current_div.appendChild(new_span);
}