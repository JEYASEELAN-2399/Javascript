// lets create an object
// its best practice to use const for objects

const cars = {
  model: "kia seltos",
  year: "2023",
  color: "blue",
  transmission: "automatic",
};

// displaying the objects
document.getElementById("app").innerHTML = cars.color;

// creating mulitple objects and nested objects

const myobj = {
  name: "jeyaseelan",
  alive: "true",
  age: 23,
  dob: "20/03/1999",
  hobbies: ["eat", "sleep", "study"], // we can also create array object

  routine: {
    morning: "prayer",
    afternoon: "lunch",
    evening: "studies",
    menu: ["idly", "brinji", "chicken"],
  }, // we can also create nested objects

  action: function () {
    return this.hobbies[1];
  },// we can also create methods in objects

};

// displaying the objects 
console.log(myobj.action());

document.getElementById("app").innerHTML=myobj.action();

// this refers to an object