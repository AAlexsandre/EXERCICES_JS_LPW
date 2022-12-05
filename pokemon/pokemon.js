// //create XMLHttpRequest object
// const xhr = new XMLHttpRequest();
// const xhr2 = new XMLHttpRequest();
// //open a get request with the remote server URL
// xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/");
// //send the Http request
// xhr.send();

// //EVENT HANDLERS
// //--------------//

// //triggered when the response is completed
// xhr.onload = function () {
//     if (xhr.status === 200) {
//         //parse JSON
//         data = JSON.parse(xhr.responseText);
//         console.log(data.results);
//         for (let i = 0; i < data.results.length; ++i) {
//             xhr2.open("GET", "https://pokeapi.co/api/v2/pokemon/" + data.results[i].name);
//             xhr2.send();
//             xhr2.onload = function () {
//                 data2 = JSON.parse(xhr2.responseText);
//                 createDiv(data2);
//             }
//         }

//     } else if (xhr.status === 404) {
//         console.log("No records found");
//     }
// }

// //triggered when a network-level error occurs with the request
// xhr.onerror = function () {
//     console.log("Network error occurred");
// }

// //triggered periodically as the client receives data
// //used to monitor the progress of the request
// xhr.onprogress = function (e) {
//     if (e.lengthComputable) {
//         console.log(`${e.loaded} B of ${e.total} B loaded!`);
//     } else {
//         console.log(`${e.loaded} B loaded!`);
//     }
// }




function createDiv(data) {
    let myDiv = document.createElement("div");
    let divNode = document.getElementById("allPokemon");

    divNode.appendChild(myDiv);
    createImg(data, myDiv);
    createUlPlusLi(data, myDiv);
}

function createImg(data, myDiv) {
    let picture = document.createElement("img");
    picture.src = data.sprites.front_default;
    myDiv.appendChild(picture);


}

function createUlPlusLi(data, myDiv) {
    let tabName = ["Name", "Height", "Weight", "Type"];
    let tabData = [data.name, data.height, data.weight, data.types[0].type.name];
    let news = document.createElement("ul");
    let newsElement;
    let newsElementNode = "";

    for (let i = 0; i < tabData.length; ++i) {
        newsElement = document.createElement("li");
        newsElementNode = tabName[i] + ' : ' + tabData[i];
        newsElement.innerHTML = newsElementNode;
        news.appendChild(newsElement);
    }
    myDiv.appendChild(news);
}