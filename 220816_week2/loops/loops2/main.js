/* Make a program that prints all positive numbers that are smaller than 100 and even, in this order:
2 98 4 96 6 94 … Print result in one line. */

let res = "";
for (let i = 2; i < 50; i += 2) {
  res += i + " " + (100 - i) + " ";
}
res += 50;
console.log(res);
