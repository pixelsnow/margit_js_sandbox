const a = Number(prompt("Enter first number"));
const b = Number(prompt("Enter second number"));
const c = Number(prompt("Enter third number"));
let output;
function calc(a, b, c) {
  if (a >= 0 || b >= 0 || c >= 0) {
    output = "sum = " + (a + b + c);
    if (a >= 0 && b >= 0 && c >= 0) {
      output += ", mult = " + a * b * c;
    }
  } else if (a < 0 && b < 0 && c < 0) {
    output = "only negatives";
  }
}
calc(a, b, c);
console.log(output);
document.getElementById("user_numbers").innerHTML = a + ", " + b + ", " + c;
document.getElementById("user_result").innerHTML = output;
