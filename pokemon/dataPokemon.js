function downloadList(howMany) {
    //create XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    let data;
    //open a get request with the remote server URL
    xhr.open("GET", "https://pokeapi.co/api/v2/pokemon?limit=" + howMany);
    //send the Http request
    xhr.send();

    //triggered when the response is completed
    xhr.onload = function () {
        if (xhr.status === 200) {
            //parse JSON
            let list = document.getElementById('allPokemons');
            let listItem;
            data = JSON.parse(xhr.responseText);
            for (pokemon of data.results) {
                listItem = createItem(pokemon.name);
                listItem.setAttribute("onclick", 'clickOnElement(this)');
                list.appendChild(listItem);
            }
        } else if (xhr.status === 404) {
            console.log("No records found");
        }
    }
}

function createItem(text) {
    let newsElement = document.createElement("li");
    newsElement.classList.add('list-group-item');
    newsElement.innerText = text;
    return newsElement;
}

function filterList(filterId, listId) {
    let filter = document.getElementById(filterId);
    filter.addEventListener('keyup', (event) => {
        let term = event.target.value;
        let listItems = document.querySelectorAll('#' + listId + ' li');

        for (let item of listItems) {
            if (item.innerText.search(term) == 0) {
                item.style.display = 'block';
            }
            else {
                item.style.display = 'none';

            }
        }
    });

}


function clickOnElement(element) {

    // Get the modal
    let modal = document.getElementById("modal");


    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/" + element.innerText);
    xhr.send();
    xhr.onload = function () {
        if (xhr.status === 200) {
            //parse JSON
            data = JSON.parse(xhr.responseText);
            fillTheModal(data);

        } else if (xhr.status === 404) {
            console.log("No records found");
        }
    }
}


function fillTheModal(data) {
    let artwork = data.sprites.other["official-artwork"].front_default;
    let types;

    let modal = document.getElementById("modal");
    modal.querySelector('img').setAttribute('src', artwork);
    modal.querySelector('p.name strong').innerText = data.name;
    modal.querySelector('p.height strong').innerText = data.height;
    modal.querySelector('p.weight strong').innerText = data.weight;

    let typeList = modal.querySelector('ul');
    console.log(typeList);
    typeList.innerHTML= '';

    for (let i = 0; i < data.types.length; ++i) {
        typeList.appendChild(createItem(data.types[i].type.name));
    }

    modal.style.display = "flex";

}

function createP(data) {
    let newP = document.createElement("p");
    newP.innerHTML = data;
    return newP;
}

function createImg(artwork) {
    let picture = document.createElement("img");
    picture.src = artwork;
    return picture;
}