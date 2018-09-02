// introduction promise

console.log('start downloading pokemons');

const pokemonPromise = fetch(
    "http://5b67b441f793e00014562611.mockapi.io/api/products"
);

console.log(typeof pokemonPromise);

pokemonPromise
    .then(response => {
        return response.json();
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));

console.log('finish download pokemons');
