/* 1.4 Moteur de recherche */
//remarque quand j'ai mis un id a body et que j'ai fait un 
//console.log de body sans le déclarer au préalable, 
//dans la console il m'a indiqué le body.

function engineOfRecherche() {
    let body = document.getElementById("body");
    if (document.getElementsByTagName("p").length != 0) {
        let input = document.createElement("input");
        input.placeholder = "research...";
        body.prepend(input);
        let test = ""
        input.addEventListener("keypress", (event) => {test += event.key; console.log(test)});


    } else {
        let advertise = document.createElement("h1");
        advertise.innerHTML = "no paragraphs => no researh in this case"
        body.appendChild(advertise);
    }
}

engineOfRecherche();