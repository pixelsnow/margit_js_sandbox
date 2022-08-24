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
