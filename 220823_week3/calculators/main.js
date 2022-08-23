function displayPetrol() {
  let price = document.querySelector("#price").value;
  let money = document.querySelector("#money").value;
  if (money / price > 10)
    document.querySelector("#user_output").textContent = `You have ${
      money / price
    } liters of petrol. Good, you can escape now!`;
  else
    document.querySelector("#user_output").textContent = `You have ${
      money / price
    } liters of petrol. Oops, you have to stay here...`;
  console.log(`price is ${price}, money is ${money}`);
}
