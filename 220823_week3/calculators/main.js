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

tempConverter = (inputId, input) => {
  const idF = document.querySelector("#fahrenheit");
  const idC = document.querySelector("#celsius");
  const idK = document.querySelector("#kelvin");
  switch (inputId) {
    case "celsius": {
      idF.value = (+input * 1.8 + 32).toFixed(2);
      idK.value = (+input + 273.15).toFixed(2);
      break;
    }
    case "fahrenheit": {
      idC.value = ((+input - 32) / 1.8).toFixed(2);
      idK.value = ((+input - 32) / 1.8 + 273.15).toFixed(2);
      break;
    }
    case "kelvin": {
      idF.value = ((+input - 273.15) * 1.8 + 32).toFixed(2);
      idC.value = (+input - 273.15).toFixed(2);
      break;
    }
  }
};
