import React, { UseState, UseEffect } from "react";
function handleSearch() {
    // const gitHubUrl = "https://pokeapi.co/api/v2/pokemon?limit=2";
    // console.log(gitHubUrl);

    let pokemon = [];

    fetch("https://pokeapi.co/api/v2/pokemon?limit=2")
        .then(response => response.json())
        .then(pokemon => this.setState({pokemon: pokemon.name}))
        .catch(error => console.log("Error :", error));

    // const [pokemon, setPokemon] = UseState({});

    // UseEffect(() => {
    //     getGitHubPokemonWithFetch();
    // }, []);

    // const getGitHubPokemonWithFetch = async () => {};

    return (
        <>
            {/* <h5 className="info-item">{pokemon.name}</h5> */}
        </>
    );
}

handleSearch();


export default handleSearch;