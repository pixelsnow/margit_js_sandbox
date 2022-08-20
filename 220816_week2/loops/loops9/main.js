/* Make a program that asks ten numbers and in the end prints out two biggest numbers. */

let ending;
function promptNums(i){
  if (i === 1) // Making the input pretty
    ending = 'st';
  else if (i === 2)
    ending = 'nd';
  else if (i === 3)
    ending = 'rd';
  else ending = 'th';
  return +prompt(`Enter the ${i}${ending} number`);
}

function findTwoMax(){
  let max1, max2;
  let user_in = 'Your numbers: ';
  for (let i = 1; i <= 10; i++) {
    num = promptNums(i);
    user_in += num;
    if (i < 10)
      user_in += ', ';
    if (i === 1)
      max1 = num;
    else if (i === 2){
      if (num > max1){
        max2 = max1;
        max1 = num;
      }
      else
        max2 = num;
    }
    else{
      if (num > max2){
        if (num > max1){ // Repeating code, how to take it out into a separate function? How to use pointers in JS?
          max2 = max1;
          max1 = num;
        }
        else
          max2 = num;
      }
    }
  }
  console.log(`Two biggest numbers: ${max1} and ${max2}.`);
  document.getElementById("user_input").innerHTML = user_in;
  document.getElementById("user_output").innerHTML = `Two biggest numbers: ${max1} and ${max2}.`;
}

findTwoMax();