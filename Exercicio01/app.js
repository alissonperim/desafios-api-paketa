const fetchPokemon = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/25`
    fetch(url)
        .then(res => res.json())
        .then(pokemon => {
            const body = document.querySelector('body')
            body.innerHTML += `
                <h2>O seu pokemon é: <span>${pokemon.name}<span></h2>
            `
            console.log(pokemon)
        })
}

fetchPokemon()