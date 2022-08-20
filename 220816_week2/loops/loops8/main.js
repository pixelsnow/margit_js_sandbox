/* Make a program that asks first how many numbers user wants to give to the program.
After that program asks those numbers. In the end program prints out the smallest number that user gave.*/

function printMin(){
  let i = +prompt('How many numbers would you like to give?');
  if (i < 1) return;
  let num;
  let min = +prompt("Enter a number");
  while (--i){
    num = +prompt("Enter a number");
    if (num < min)
      min = num;
  }
  alert(`The smallest number that you gave was ${min}`);
}

printMin();