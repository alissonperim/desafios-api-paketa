const axios = require('axios')

const fetchPokemonByAxios = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/25`
    axios.get(url)
        .then(res => {
            console.log(res)
        })
}

fetchPokemonByAxios()