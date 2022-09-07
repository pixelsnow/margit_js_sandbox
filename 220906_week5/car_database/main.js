const add_car = document.querySelector("#add_car");
const car_table = document.querySelector("#car_table_body");

const licence_input = document.querySelector("#licence");
const maker_input = document.querySelector("#maker");
const model_input = document.querySelector("#model");
const owner_input = document.querySelector("#owner");
const price_input = document.querySelector("#price");
const color_input = document.querySelector("#color");

const search = document.querySelector("#search_form");
const search_in = document.querySelector("#search_input");
const search_res = document.querySelector("#search_result");
const input_err = document.querySelector("#input_error");

let cars = [];

class Car {
  constructor(
    licence = "",
    maker = "",
    model = "",
    owner = "",
    price = "",
    color = ""
  ) {
    this.licence = licence.trim();
    this.maker = maker.trim();
    this.model = model.trim();
    this.owner = owner.trim();
    this.price = price.trim();
    this.color = color.trim();
  }

  updateInfo(
    licence = "",
    maker = "",
    model = "",
    owner = "",
    price = "",
    color = ""
  ) {
    this.licence = licence.trim();
    this.maker = maker.trim();
    this.model = model.trim();
    this.owner = owner.trim();
    this.price = price.trim();
    this.color = color.trim();
  }

  printCarToTable() {
    return `<tr>
    <td>${this.licence}</td>
    <td>${this.maker}</td>
    <td>${this.model}</td>
    <td>${this.owner}</td>
    <td>${this.price}</td>
    <td>${this.color}</td>
    </tr>`;
  }

  printCarInfo() {
    return `The car with licence number ${this.licence} is a ${this.maker} ${this.model} and belongs to ${this.owner}`;
  }
}

const printCarTable = () => {
  car_table.innerHTML = "";
  cars.forEach((car) => {
    car_table.innerHTML += car.printCarToTable();
  });
};

add_car.addEventListener("submit", (e) => {
  e.preventDefault();
  input_err.textContent = "";
  input_err.style.padding = "0";
  if (licence_input.value.trim().length) {
    let duplicate = false;
    cars.forEach((car) => {
      if (car.licence === licence_input.value.trim()) {
        car.updateInfo(
          licence_input.value,
          maker_input.value,
          model_input.value,
          owner_input.value,
          price_input.value,
          color_input.value
        );
        duplicate = true;
        input_err.textContent = `A car with licence number ${car.licence} already exists. Information about the car have been overwritten with new data that you entered.`;
        input_err.style.padding = "1rem";
      }
    });
    if (!duplicate) {
      const newcar = new Car(
        licence_input.value,
        maker_input.value,
        model_input.value,
        owner_input.value,
        price_input.value,
        color_input.value
      );
      cars.push(newcar);
    }
    printCarTable();
  }
  add_car.reset();
});

search.addEventListener("submit", (e) => {
  e.preventDefault();
  search_res.textContent = "";
  search_res.style.padding = "0";
  if (search_in.value.trim().length) {
    let result = `Sorry, the car with license number ${search_in.value.trim()} was not found.`;
    cars.forEach((car) => {
      if (car.licence === search_in.value.trim()) result = car.printCarInfo();
    });
    search_res.textContent = result;
    search_res.style.padding = "1rem 0 0 0";
  }
});
