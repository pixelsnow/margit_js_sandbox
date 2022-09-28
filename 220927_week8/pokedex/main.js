const gens = document.querySelectorAll("#gens ul li button");
const search = document.querySelector("#search");
const cards = document.querySelector(".card-container");

let pokeData = [];
let imgLink;

const fetchPoke = () => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
    .then((response) => response.json())
    .then((data) => {
      pokeData = data.results;
      pokeCards();
    });
};

const fetchImg = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      cards.insertAdjacentHTML(
        "beforeend",
        `<div class="card">
          <div class="image"><img src="${data.sprites.other.dream_world.front_default}" alt="${data.species.name} picture"></div>
          <div class="info"><h2>${data.species.name}</h2></div>
        </div>`
      );
    });
};

const pokeCards = () => {
  pokeData.forEach((pokemon) => {
    console.log();
    imgLink = fetchImg(pokemon.url);
    /* cards.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
        <div class="image"><img src="${imgLink}" alt="${pokemon.name} picture"></div>
        <div class="info"><h2>${pokemon.name}</h2></div>
      </div>`
    ); */
  });
};

fetchPoke();

/* 


https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
          i + 1
        }.svg


        
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
