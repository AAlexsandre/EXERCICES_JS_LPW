/**
 * This function create the digital clock
 */
function create_the_clock() {
    let clock = new Date;
    let tab_of_clock = [clock.getHours(), clock.getMinutes(), clock.getSeconds()];

    let container = document.getElementById("clock");
    let node;

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for (let i = 0; i < tab_of_clock.length; ++i) {
        node = leadingZeros(tab_of_clock[i]);

        if (i < tab_of_clock.length - 1) {
            node += ":";
        }
        container.appendChild(document.createTextNode(node));
    }

    setInterval(create_the_clock, 1000);
}

create_the_clock();

/**
 * This function add a leading zero to a digit
 * @param {number} digit 
 */
function leadingZeros(digit) {
    if (digit < 10) {
        digit = "0" + digit;
    }

    return digit;
} 