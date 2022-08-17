/* Make a program that asks 20 numbers from user. After that the program prints out how many of those numbers where even.*/

let counter = 0;
for (let i = 1; i <= 4; i++) {
  if (+prompt(`Enter the ${i}th number`) % 2 == 1) counter++;
}
alert(`${counter} of your numbers were even`);
