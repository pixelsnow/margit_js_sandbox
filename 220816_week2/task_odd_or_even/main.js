let a;
a = prompt("Enter a number");
let output;
function calc(a) {
  if (a > 0) {
    if (a % 2) output = `number ${a} is odd`;
    else output = `number ${a} is even`;
  } else output = `number ${a} is not positive`;
}
calc(a);
console.log(output);
document.getElementById("user_result").innerHTML = output;
