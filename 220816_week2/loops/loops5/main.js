/* Make a program that asks numbers from the user, until user gives 0 and then program ends.
In the end program prints out average of the numbers.*/

let num;
let sum = 0;
let count = 0;
do {
  num = +prompt("Enter a number");
  if (!num) break;
  sum += num;
  count++;
} while (num);
alert(`average of your numbers is ${sum / count}`);
