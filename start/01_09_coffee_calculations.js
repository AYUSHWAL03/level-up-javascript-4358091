// Write your code here
//1st approach
// const numCoffies = [2,1,3,5];
// const priceCoffee = 1.25;
// var total = 0;
// for(var i=0;i<numCoffies.length;i++){
//   var price = numCoffies[i] * priceCoffee;
//   total += price;
// }
// console.log(` the bill amount is ${total}`);

//2nd approach

function getTotalPrice(coffees,price){
  const coffeesum = coffees.reduce((total,sum) =>(total += sum))
  return `The bill amount is ${coffeesum * price}`;
}

console.log(getTotalPrice([2,1,3,5],5))