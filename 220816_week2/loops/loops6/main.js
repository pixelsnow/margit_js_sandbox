/* Make a program that asks 25 numbers form the user. In the end program prints out average of the numbers.*/

let ending;
let sum = 0;
let count = 0;
for (let i = 1; i <= 25; i++) {
  if (i === 1 || i === 21) // Making the input pretty
    ending = 'st';
  else if (i === 2 || i === 22)
    ending = 'nd';
  else if (i === 3 || i === 23)
    ending = 'rd';
  else ending = 'th';

  sum += +prompt(`Enter the ${i}${ending} number`);
  count++;
}
alert(`average of your numbers is ${sum / count}`);