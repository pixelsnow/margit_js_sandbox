const form = document.querySelector("form");
const customer = document.querySelector("#name");
const size = document.querySelectorAll('[name="size"]');
const toppings = document.querySelectorAll('input[type="checkbox"]');
const delivery = document.querySelector("#delivery");
const order = document.querySelector("#order");

const takeOrder = (e) => {
  e.preventDefault();

  let customerName = customer.value;
  let sizeResult = "";
  let toppingsResult = [];
  let deliveryResult = delivery.options[delivery.selectedIndex].value;
  let price = 0;

  size.forEach((item) => {
    if (item.checked) sizeResult = item.value;
  });

  switch (sizeResult) {
    case "2":
      price += 7.5;
      break;
    case "4":
      price += 10.5;
      break;
    case "6":
      price += 12.5;
      break;
    case "8":
      price += 15.5;
      break;
    default:
  }

  toppings.forEach((item) => {
    if (item.checked) toppingsResult.push(item.value);
  });

  if (toppingsResult.length > 4) price += (toppingsResult.length - 4) * 0.5;

  if (deliveryResult === "home") price += 5;

  order.textContent = `Thank you for the order, ${customerName}! Size: ${sizeResult}. Toppings: ${toppingsResult.join(
    ", "
  )}. Delivery: ${deliveryResult}`;
};

form.addEventListener("submit", takeOrder);
