/*Make a program that ask first one number from the user. After that the program asks: ”Do you want to continue giving numbers?(y/n)”.
If user answers y, the program continues to ask another number. If user answers n, program ends.
In the end program prints out average of the numbers.*/

let sum = 0;
let count = 0;
do {
  sum += +prompt("Enter a number");
  count++;
} while (prompt('Do you want to continue giving numbers?(y/n)') === 'y');
alert(`average of your numbers is ${sum / count}`);
