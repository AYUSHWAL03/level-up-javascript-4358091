// Write your code here

function factorial(num){
  if(num == 1){
    return 1;
  }if(num == 0){
    return 0;
  }
  return factorial(num-1)*(num);
}
console.log(factorial(5));