function displayPetrol() {
  const price = +document.querySelector("#price").value;
  const money = +document.querySelector("#money").value;
  const answer = document.querySelector("#user_output");
  money / price > 10
    ? (answer.textContent = `You have ${(money / price).toFixed(
        1
      )} liters of petrol. Good, you can escape now!`)
    : (answer.textContent = `You have ${(money / price).toFixed(
        1
      )} liters of petrol. Oops, you have to stay here...`);
  /* if (money / price > 10)
    answer.textContent = `You have ${(money / price).toFixed(
      1
    )} liters of petrol. Good, you can escape now!`;
  else
    answer.textContent = `You have ${(money / price).toFixed(
      1
    )} liters of petrol. Oops, you have to stay here...`; */
  console.log(`price is ${price}, money is ${money}`);
}

celsiusConverter = (input) => {
  document.querySelector("#fahrenheit").value = (+input * 1.8 + 32).toFixed(2);
  document.querySelector("#kelvin").value = (+input + 273.15).toFixed(2);
};

fahrenheitConverter = (input) => {
  document.querySelector("#celsius").value = ((+input - 32) / 1.8).toFixed(2);
  document.querySelector("#kelvin").value = (
    (+input - 32) / 1.8 +
    273.15
  ).toFixed(2);
};

kelvinConverter = (input) => {
  document.querySelector("#fahrenheit").value = (
    (+input - 273.15) * 1.8 +
    32
  ).toFixed(2);
  document.querySelector("#celsius").value = (+input - 273.15).toFixed(2);
};
