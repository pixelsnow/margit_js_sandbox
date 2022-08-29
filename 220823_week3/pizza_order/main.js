let cost = 0;
let sizeCost = 7.5;
let deliveryCost = 5;
let numToppings = 0;
let username = "";
let toppingStr = "";

const recalcCost = () => {
  cost = sizeCost + deliveryCost;
  if (numToppings > 4) {
    cost += (numToppings - 4) * 0.5;
  }
  document.querySelector("#output_price").textContent = `To pay: €${cost}`;
};

const sizes = document.querySelectorAll('input[name="size"]');
const toppings = document.querySelectorAll('input[name="topping"]');
const deliveryIn = document.querySelector("#delivery");
const nameIn = document.querySelector("#name");

for (let i = 0; i < sizes.length; i++) {
  sizes[i].addEventListener("change", () => {
    switch (i) {
      case 0: {
        sizeCost = 7.5;
        break;
      }
      case 1: {
        sizeCost = 10.5;
        break;
      }
      case 2: {
        sizeCost = 12.5;
        break;
      }
      case 3: {
        sizeCost = 15.5;
        break;
      }
    }
    recalcCost();
    document.querySelector(
      "#output_size"
    ).textContent = `Size: ${sizes[i].value}`;
  });
}

const updateToppings = () => {
  toppingStr = "";
  toppings.forEach((topping) => {
    if (topping.checked) toppingStr += topping.value + " ";
  });
  document.querySelector("#output_toppings").textContent =
    "Your toppings: " + toppingStr;
};

for (let i = 0; i < toppings.length; i++) {
  toppings[i].addEventListener("change", () => {
    if (toppings[i].checked) numToppings++;
    else numToppings--;
    console.log(`number of toppings: ${numToppings}`);
    recalcCost();
    updateToppings();
  });
}

deliveryIn.addEventListener("change", (event) => {
  console.log(event.target.value);
  if (event.target.value === "delivery") deliveryCost = 5;
  else deliveryCost = 0;
  recalcCost();
  document.querySelector(
    "#output_delivery"
  ).textContent = `Your delivery method: ${event.target.value}`;
});

/* deliveryIn.addEventListener("click", (event) => {
  console.log(event.target.value);
}); */

nameIn.addEventListener("change", () => {
  username = nameIn.value;
  document.querySelector("#output_name").textContent = `Your name: ${username}`;
});
