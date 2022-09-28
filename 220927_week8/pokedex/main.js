const gens = document.querySelectorAll("#gens ul li button");
const search = document.querySelector("#search");
const cards = document.querySelector(".card-container");

let pokeData = [];
let imgLink;
let pokeData2 = [];

const renderCards = () => {
  pokeData2.forEach((card) => {
    cards.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
        <div class="image"><img src="${card.img}" alt="${card.name} picture"></div>
        <div class="info"><h2>${card.name}</h2></div>
      </div>`
    );
  });
};

const fetchPoke = async () => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
  );
  const data = await response.json();
  pokeData = data.results;
  await pokeCards();
  renderCards();
};

const pokeCards = async () => {
  pokeData2.length = pokeData.length;
  for (let i = 0; i < pokeData.length; i++) {
    const response = await fetch(pokeData[i].url);
    const data = await response.json();
    let img = data.sprites.other["official-artwork"].front_default;
    if (!img) img = data.sprites.other.dream_world.front_default;
    if (!img) img = data.sprites.other.home.front_default;
    pokeData2[i] = { name: pokeData[i].name, img: img };
  }
};

const fetchImg = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      /* cards.insertAdjacentHTML(
        "beforeend",
        `<div class="card">
          <div class="image"><img src="${data.sprites.other.dream_world.front_default}" alt="${data.species.name} picture"></div>
          <div class="info"><h2>${data.species.name}</h2></div>
        </div>`
      ); */
    });
};

const pokeCards2 = () => {
  pokeData.forEach((pokemon, i) => {
    fetch(pokemon.url)
      .then((response) => response.json())
      .then((data) => {
        let img = data.sprites.other.dream_world.front_default;
        if (img) img = data.sprites.other["official-artwork"].front_default;

        /* cards.insertAdjacentHTML(
        "beforeend",
        `<div class="card">
          <div class="image"><img src="${data.sprites.other.dream_world.front_default}" alt="${data.species.name} picture"></div>
          <div class="info"><h2>${data.species.name}</h2></div>
        </div>`
      ); */
      });
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
