let age = prompt("How old are you?");
let output;
if (age < 18) output = "too young";
else if (age < 27) output = "Right age for miltary service";
else if (age < 41) output = "You are in reserve";
else if (age < 55) output = "You are in backup reserve";
else output = "too aged";

console.log(output);
/* document.body.innerHTML = document.body.innerHTML.replace(": ", ": " + output); */
document.body.innerHTML = document.body.innerHTML.replace(": ", ": " + output);
