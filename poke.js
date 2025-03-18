document.getElementById('searchButton').addEventListener('click', async () => {
    const pokemonName = document.getElementById('pokemonInput').value.toLowerCase();
    if (pokemonName) {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            const data = await response.json();

            if (response.ok) {
                displayPokemonInfo(data);
            } else {
                document.getElementById('pokemonInfo').textContent = 'Pokémon no encontrado.';
            }
        } catch (error) {
            console.error('Error:', error);
            document.getElementById('pokemonInfo').textContent = 'Error al obtener la información del Pokémon.';
        }
    } else {
        document.getElementById('pokemonInfo').textContent = 'Ingresa el nombre de un Pokémon.';
    }
});

function displayPokemonInfo(pokemon) {
    const pokemonCard = `
        <div class="pokemon-card">
            <h2>${pokemon.name.toUpperCase()}</h2>
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            <p><strong>Habilidades:</strong> ${pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
            <p><strong>Tipos:</strong> ${pokemon.types.map(type => type.type.name).join(', ')}</p>
            <p><strong>Peso:</strong> ${pokemon.weight} kg</p>
            <p><strong>Altura:</strong> ${pokemon.height} m</p>
        </div>
    `;
    document.getElementById('pokemonInfo').innerHTML = pokemonCard;
}