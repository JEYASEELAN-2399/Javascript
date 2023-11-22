/*A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).*/

function myfunction(p1, p2) {
  return p1 * p2;
}

document.getElementById("app").innerHTML =
  "the product of both the numbers is " + myfunction(10, 10);

console.log(myfunction(10, 20));

// write an function to calculate celcius

function celsius(f) {
  return (5 / 9) * (f - 32);
}

let degree = celsius(90);

document.getElementById("celsius").innerHTML = "the degree celsius is" + degree;


