const poke_container = document.getElementById('poke-container');
const pokemon_count = 150;
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
};

//Tipos de pokemon principales obtenidos a partir de los colores definidos
const main_types = Object.keys(colors);

// Funcion para obtener y mostrar tarjetas de pokemon
const fetchPokemons = async () => {
    for (let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i);
    }  // Obtener datos de un pokemon por su ID
}
// obtener los datos de una de un pokemon por su id 
const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`; // URL de la PokeApi
    const res = await fetch(url); // get de la URL
    const data = await res.json(); //Convertir esa respuesta en formato JSON
    createPokemonCard(data); // 
}
 
// Funcion para crear la tarjeta de pokemon
const createPokemonCard = (pokemon) => {
    const pokemonElement = document.createElement('div');  //Crear un elemento div para la tarjeta de pokemon 
    pokemonElement.classList.add('pokemon'); // Agregar la clase de pokemon

    const type = pokemon.types[0].type.name; // Estas dos const obtienen el tipo y color del pokemon
    const color = colors[type];

    pokemonElement.style.backgroundColor = color;  //Establece el fondo de la tarjeta con el color del tipo de pokemon

    const imgContainer = document.createElement('img'); // Crear el elemento img para referenciar las imagenes
    imgContainer.src = pokemon.sprites.front_default;
    imgContainer.alt = pokemon.name;
    // Elemento HTML para mostrar la imagen del pokemon // se identa las funcionalidades creadas een javascript
    const pokemonInnerHTML = `  
        <div class="img-container">
            ${imgContainer.outerHTML}                                                 <!-- Insertar la imagen del pokemon -->
         </div> 
        <div class="info">
            <span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>    <!-- Insertar el numero con los 000 -->
            <h3 class="name">${pokemon.name}</h3>                                     <!-- Nombre del pokemon -->
            <small class="type">Type: <span>${type}</span></small>                    <!-- Insertar el tipo de pokemon -->
        </div>
    `;

    pokemonElement.innerHTML = pokemonInnerHTML;  // Contenido del HTML de la tarjeta
    poke_container.appendChild(pokemonElement);   // Agrega la tarjeta de pokemon al contenedor 
}

fetchPokemons();  // funcion para llamar a las tarjetas de pokemon.





