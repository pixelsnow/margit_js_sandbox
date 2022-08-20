/* Make a program that asks 20 numbers from user. After that the program prints out how many of those numbers where even.*/

let counter = 0;
let ending;
for (let i = 1; i <= 20; i++) {
  if (i === 1) // Making the input pretty
    ending = 'st';
  else if (i === 2)
    ending = 'nd';
  else if (i === 3)
    ending = 'rd';
  else ending = 'th';

  if (+prompt(`Enter the ${i}${ending} number`) % 2 == 1) counter++;
}
alert(`${counter} of your numbers were even`);
