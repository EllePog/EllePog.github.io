const getRandomPokemon = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150);
    const response = await fetch(url);
    const pokemon = await response.json();
    return pokemon
};

const renderPokemon = (pokemon) => {
    
    const div = document.querySelector('div');
    const img = document.createElement('img');
    img.src = pokemon.sprites.front_default; 
    img.alt = pokemon.name;
    div.appendChild(img); 
};

getRandomPokemon().then(pokemon => renderPokemon(pokemon));




