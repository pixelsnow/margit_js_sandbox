const salary = Number(prompt("Enter your hourly salary"));
const hours = Number(prompt("Enter how many hours you have worked"));
let output;
function calc(salary, hours) {
  if (salary < 0 || hours < 0) {
    output = "Invalid data";
  } else {
    output = salary * hours;
    if (hours > 7) {
      output += salary * 0.5 * (hours - 7);
      if (hours > 9) output += salary * 0.5 * (hours - 9);
    }
  }
}
calc(salary, hours);
console.log(output);
document.getElementById(
  "user_input"
).innerHTML = `Hourly salary: ${salary}, hours worked: ${hours}`;
document.getElementById("user_result").innerHTML = `Your earned: ${output}`;
