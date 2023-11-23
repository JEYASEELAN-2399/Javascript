// adding elements to an array 

const groceries = ["apple","orange","walnuts","grapes","dates"]

//dispalying the elements in the array

document.getElementById("app").innerHTML=groceries[2];
console.log(groceries)


// adding elements into the existing indexes

groceries[5]="banana";
// using push method

groceries.push("cherries","blue berry")

console.log(groceries)
document.getElementById("app").innerHTML=groceries;


// array.slice method gives exact indexes 


groceries.slice(0,2)

document.getElementById("arrays").innerHTML=groceries.slice(3,7);


// array.indexof array.length method 


console.log(groceries.indexOf("grapes")) // It gives index of the elements contained in the array

console.log(groceries.length)  // it gives total length eg elements contained in the array





