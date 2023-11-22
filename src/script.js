

document.getElementById("app").innerHTML = "hello jeyaseelan";
let car = 'suzuki'
var carmodel = 2023;
var carmodel = 2020;
{
    let car='swift';
    console.log(car)
    var carmodel = 2021
}
 car = 'bmw'

console.log(car)
console.log(typeof(carmodel))


{
  let  x = 20;
  console.log(x)
}


{
   let x = 10;
   console.log(x)
}


// let and const is used to declare the variables and it is blocked scope 



//we can redeclare variables in another diff block but in same block it is not allowed


// ******* hoisting ****** 


// with var we can iniliase the variable before it is declared eg 

{
carname = 'volvo'

var carname;


console.log(carname)
}

// but hoisting is not applicable to let and const
{

try{carname = "bmw";
let carname;}
catch(err){
console.log(err);
}}