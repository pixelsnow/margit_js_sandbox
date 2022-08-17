let a, b, c;
a = prompt("Enter first number");
b = prompt("Enter second number");
c = prompt("Enter third number");
let output;
function calc(a, b, c) {
  if (a >= 0 || b >= 0 || c >= 0) {
    output =
      "sum = " +
      (Number.parseFloat(a) + Number.parseFloat(b) + Number.parseFloat(c));
    if (a >= 0 && b >= 0 && c >= 0) output += ", mult = " + a * b * c;
  } else if (a < 0 && b < 0 && c < 0) output = "only negatives";
}
calc(a, b, c);
console.log(output);
document.getElementById("user_numbers").innerHTML = a + ", " + b + ", " + c;
document.getElementById("user_result").innerHTML = output;
