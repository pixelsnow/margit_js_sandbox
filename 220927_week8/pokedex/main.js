const gens = document.querySelectorAll("#gens ul li button");
const search = document.querySelector("#search");
const cards = document.querySelector(".card-container");

let pokeData = [];

const fetchPoke = () => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
    .then((response) => response.json())
    .then((data) => {
      pokeData = data.results;
      console.log(pokeData);
      pokeCards();
    });
};

const pokeCards = () => {
  pokeData.forEach((pokemon, i) => {
    console.log(i);
    cards.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
        <div class="image"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
          i + 1
        }.svg" alt="${pokemon.name} picture"></div>
        <div class="info"><h2>${pokemon.name}</h2></div>
      </div>`
    );
  });
};

fetchPoke();

/* 
const fetchPoke = async () => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
  );
  const data = await response.json();
  data.results.forEach((pokemon) => pokemons.push(pokemon.name));
  console.log(pokemons);
  pokemons.forEach((pokemon) => {
    cards.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
    <div class="image"></div>
    <div class="info"><h2>${pokemon}</h2></div>
  </div>`
    );
  });
};
 */
