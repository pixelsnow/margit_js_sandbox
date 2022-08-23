/* Make a program that asks 25 numbers form the user. In the end program prints out average of the numbers.*/

let ending;
let sum = 0;
let count;
for (count = 0; count < 25; ++count) {
  if (count === 1 || count === 21)
    // Making the input pretty
    ending = "st";
  else if (count === 2 || count === 22) ending = "nd";
  else if (count === 3 || count === 23) ending = "rd";
  else ending = "th";

  sum += +prompt(`Enter the ${count + 1}${ending} number`);
}
console.log(`sum = ${sum}, count = ${count}`);
alert(`average of your numbers is ${sum / count}`);
