let form = document.getElementById("the_sentences");
let input_form = document.getElementById("text").value;

console.log(form);
console.log(input_form);

let new_span;
let new_letter;
let current_span;

for (let i = 0; i < input_form.length; ++i) {
    console.log(input_form.charAt(i));
    new_span = document.createElement("span");
    new_letter = document.createTextNode(input_form.charAt(i));
    new_span.appendChild(new_letter);

    current_span = document.getElementById("colorized");
    document.body.insertBefore(new_span, current_span);
}