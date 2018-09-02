// introduction promise

console.log('start downloading pokemons');

const pokemonPromise = fetch(
    "http://5b67b441f793e00014562611.mockapi.io/api/products"
);

console.log(typeof pokemonPromise);
console.log(pokemonPromise);

pokemonPromise
    .then(response => {
        console.log(pokemonPromise);
        return response.json();
    })
    .then(data => console.log(data))
    .catch(err => {
        console.log(err);
        console.log(pokemonPromise);
    });

console.log('finish download pokemons');
