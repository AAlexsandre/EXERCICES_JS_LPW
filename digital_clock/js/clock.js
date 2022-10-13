/**
 * This function create the digital clock
 */
function create_the_clock() {
    let clock = new Date;
    let tab_of_clock = [clock.getHours(), clock.getMinutes(), clock.getSeconds()];

    let contener = document.getElementById("clock");
    let new_span;
    let node;

    let remove_the_elements = document.getElementById("clock");

    while (remove_the_elements.firstChild) {
        remove_the_elements.removeChild(remove_the_elements.firstChild);
    }

    for (let i = 0; i < tab_of_clock.length; ++i) {
        new_span = document.createElement("span");

        if (i < tab_of_clock.length - 1) {
            node = document.createTextNode(tab_of_clock[i] + " : ");

            if (i == 0) {
                if (tab_of_clock[i] < 10) {
                    node = document.createTextNode(0 + "" + tab_of_clock[i] + " : ");
                }
            }
            if (i == 1) {
                if (tab_of_clock[i] < 10) {
                    node = document.createTextNode(0 + "" + tab_of_clock[i] + " : ");
                }
            }

        } else {
            node = document.createTextNode(tab_of_clock[i]);

            if (i == 2) {
                if (tab_of_clock[i] < 10) {
                    node = document.createTextNode(0 + "" + tab_of_clock[i]);
                }
            }

        }
        new_span.appendChild(node);
        contener.appendChild(new_span);


    }

}

setInterval(create_the_clock, 1000);