/* Make a program that asks ten numbers.
Program calculates and prints out sum and average, also prints out the smallest and biggest number.*/

let ending;
function promptNums(i){
  if (i === 1) // Making the prompt message pretty
    ending = 'st';
  else if (i === 2)
    ending = 'nd';
  else if (i === 3)
    ending = 'rd';
  else ending = 'th';
  return +prompt(`Enter the ${i}${ending} number`);
}

function printNumStats(){
  let num, min, max;
  let user_in = 'Your numbers: ';
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    num = promptNums(i);
    user_in += num.toString();
    if (i < 10) // Formatting user input for the html page
      user_in += ', ';
    if (i === 1) // Handling min and max
      max = min = num;
    else{
      if (num > max)
        max = num;
      if (num < min)
        min = num;
    }
    sum += num;
  }
  console.log(`Sum is ${sum}, average is ${sum / 10}, smallest is ${min}, biggest is ${max}.`);
  document.getElementById("user_input").innerHTML = `${user_in}.`;
  document.getElementById("user_output").innerHTML = `Sum is ${sum}, average is ${sum / 10}, smallest is ${min}, biggest is ${max}.`;
}

printNumStats();