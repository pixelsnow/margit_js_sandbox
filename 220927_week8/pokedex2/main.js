const gens = document.querySelectorAll("#gens ul li button");
const search = document.querySelector("#search");
const cards = document.querySelector(".card-container");
const genButtons = document.querySelectorAll("#gens button");
const footer = document.querySelector("footer");
const loader = document.querySelector("#loader");
const types = document.querySelector("#types");
const checkboxes = document.querySelectorAll("#types input");

let pokeData = [];

const getTypeImg = (type) => {
  switch (type) {
    case "bug":
      return "https://upload.wikimedia.org/wikipedia/commons/3/3c/Pok%C3%A9mon_Bug_Type_Icon.svg";
    case "dark":
      return "https://upload.wikimedia.org/wikipedia/commons/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg";
    case "ghost":
      return "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg";
    case "grass":
      return "https://upload.wikimedia.org/wikipedia/commons/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg";
    case "dragon":
      return "https://upload.wikimedia.org/wikipedia/commons/a/a6/Pok%C3%A9mon_Dragon_Type_Icon.svg";
    case "electric":
      return "https://upload.wikimedia.org/wikipedia/commons/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg";
    case "fairy":
      return "https://upload.wikimedia.org/wikipedia/commons/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg";
    case "fighting":
      return "https://upload.wikimedia.org/wikipedia/commons/b/be/Pok%C3%A9mon_Fighting_Type_Icon.svg";
    case "fire":
      return "https://upload.wikimedia.org/wikipedia/commons/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg";
    case "flying":
      return "https://upload.wikimedia.org/wikipedia/commons/e/e0/Pok%C3%A9mon_Flying_Type_Icon.svg";
    case "ground":
      return "https://upload.wikimedia.org/wikipedia/commons/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg";
    case "ice":
      return "https://upload.wikimedia.org/wikipedia/commons/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg";
    case "normal":
      return "https://upload.wikimedia.org/wikipedia/commons/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg";
    case "poison":
      return "https://upload.wikimedia.org/wikipedia/commons/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg";
    case "psychic":
      return "https://upload.wikimedia.org/wikipedia/commons/a/ab/Pok%C3%A9mon_Psychic_Type_Icon.svg";
    case "rock":
      return "https://upload.wikimedia.org/wikipedia/commons/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg";
    case "steel":
      return "https://upload.wikimedia.org/wikipedia/commons/3/38/Pok%C3%A9mon_Steel_Type_Icon.svg";
    case "water":
      return "https://upload.wikimedia.org/wikipedia/commons/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg";
    default:
      return "#";
  }
};

// Renders to HTML
const renderCards = (pokeData) => {
  cards.innerHTML = "";
  pokeData.forEach((card) => {
    let typesHtml = "";
    card.types.forEach(
      (type) =>
        (typesHtml += `<img src="${getTypeImg(type)}" alt="${type}"></img>`)
    );
    cards.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
      <div class="types">${typesHtml}</div>
      <div class="gen">${card.gen}</div>
        <div class="image"><img src="${card.img}" alt="${card.name} picture"></div>
        <div class="info"><h2>#${card.id} ${card.name}</h2></div>
      </div>`
    );
  });
};

// Returns a link to an image
const setImg = (data) => {
  let img = data.sprites.other.dream_world.front_default;
  if (!img) img = data.sprites.other["official-artwork"].front_default;
  if (!img) img = data.sprites.other.home.front_default;
  if (!img) img = data.sprites.front_default;
  if (!img)
    img =
      "https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg";
  return img;
};

// Returns an array of types
const getTypes = (types) => {
  let res = [];
  types.forEach((type) => {
    res.push(type.type.name);
  });
  return res;
};

const determineGen = (i) => {
  if (i < 151) return 1;
  else if (i < 251) return 2;
  else if (i < 386) return 3;
  else if (i < 493) return 4;
  else if (i < 649) return 5;
  else if (i < 721) return 6;
  else if (i < 809) return 7;
  else if (i < 905) return 8;
  else return 0;
};

// Rewrites pokeData with full info
const fillPokeData = async () => {
  for (let i = 0; i < pokeData.length; i++) {
    // Fetching pokemon data from the url
    const response = await fetch(pokeData[i].url);
    const data = await response.json();
    const img = setImg(data);
    console.log(i);
    const types = getTypes(data.types);
    // Fetching generation info from the species page
    /* */
    let gen;
    if (i <= 905) gen = determineGen(i);
    else {
      const response2 = await fetch(data.species.url);
      const data2 = await response2.json();
      gen = +data2.generation.url[data2.generation.url.length - 2];
    }
    // Saving info into an array of objects
    pokeData[i] = {
      id: data.id,
      name: data.name,
      img: img,
      gen: gen,
      types: types,
    };
  }
};

const startLoader = () => {
  footer.classList.add("hidden");
  loader.classList.remove("hidden");
};

const stopLoader = () => {
  footer.classList.remove("hidden");
  loader.classList.add("hidden");
};

const fetchPoke = async () => {
  startLoader();
  // Fetching the full list of pokemons in the database
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=905&offset=0"
  );
  const data = await response.json();
  // Saving the list to the array
  pokeData = data.results;
  // Getting full info about all pokemons and rewriting the array
  await fillPokeData();
  stopLoader();
  // Rendering to HTML
  renderCards(pokeData);
};

fetchPoke();

genButtons.forEach((button, i) => {
  button.addEventListener("click", () => {
    genButtons.forEach((btn) => btn.classList.remove("picked"));
    button.classList.add("picked");
    if (i === 8) renderCards(pokeData);
    else renderCards(pokeData.filter((pokemon) => pokemon.gen === i + 1));
  });
});

search.addEventListener("input", () => {
  renderCards(
    pokeData.filter((pokemon) => {
      return (
        pokemon.name.slice(0, search.value.trim().length) ==
        search.value.trim().toLowerCase()
      );
    })
  );
});

function multipleExist(arr, values) {
  return values.every((value) => {
    return arr.includes(value);
  });
}

types.addEventListener("change", () => {
  let checkedTypes = [];
  checkboxes.forEach((type) => {
    if (type.checked) {
      type.classList.add("checked");
      checkedTypes.push(type.value);
    } else type.classList.remove("checked");
  });
  console.log(checkedTypes);
  renderCards(
    pokeData.filter((pokemon) => {
      return multipleExist(pokemon.types, checkedTypes);
    })
  );
});