let calcCost = 0;

let sizeCost = 10.5;
let deliveryCost = 0;
let numToppings = 0;
let userName = "";

const recalcCost = () => {
  cost = sizeCost + deliveryCost;
  if (numToppings > 4) {
    cost += (numToppings - 4) * 0.5;
  }
  document.querySelector("#output_price").textContent = `To pay: €${cost}`;
  document.querySelector("#price_circle_text").textContent = `€${cost}`;
};

/* SIZE */

const updateSize = (i) => {
  document.querySelector("#output_size").textContent = `Size: for ${
    2 * (i + 1)
  }`;
};

const sizes = document.querySelectorAll('input[name="size"]');

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
    updateSize(i);
  });
}

/* TOPPINGS */

const updateToppings = () => {
  let toppingStr = "";
  toppings.forEach((topping) => {
    if (topping.checked) toppingStr += topping.value + ", ";
  });
  if (toppingStr.length > 2) toppingStr = toppingStr.slice(0, length - 2) + ".";
  else toppingStr = "none.";
  document.querySelector("#output_toppings").textContent =
    "Your toppings: " + toppingStr;
};

const toppings = document.querySelectorAll('input[name="topping"]');

for (let i = 0; i < toppings.length; i++) {
  toppings[i].addEventListener("change", () => {
    if (toppings[i].checked) numToppings++;
    else numToppings--;
    console.log(`number of toppings: ${numToppings}`);
    recalcCost();
    updateToppings();
  });
}

/* DELIVERY */

const updateDelivery = () => {
  document.querySelector(
    "#output_delivery"
  ).textContent = `Your delivery method: ${deliveryIn.selectedOptions[0].label}`;
};

const deliveryIn = document.querySelector("#delivery");

deliveryIn.addEventListener("change", (event) => {
  console.log(event.target.value);
  if (event.target.value === "delivery") deliveryCost = 5;
  else deliveryCost = 0;
  recalcCost();
  updateDelivery();
});

/* NAME */

const updateName = () => {
  document.querySelector("#output_name").textContent = `Your name: ${username}`;
};

const nameIn = document.querySelector("#name");

nameIn.addEventListener("change", () => {
  username = nameIn.value;
  updateName();
});
