/* Make a program that asks repeatedly from the user the distance (km) and time (h) and calculates average speed. The program ends when user gives 0 for the distance.
(After getting 0, the program does not ask anything from the user.)*/

let distance, time;
do {
  distance = +prompt("Enter distance in km");
  time = +prompt("Enter time in hours");
  alert(`Average speed is ${distance / time} km/h`);
} while (distance);
