// Write your code here
//1st approach
// function checkPassword(password){
//   const specialchar = /[!@#$%^&*(){}?]/
//   const digits = /[1-9]/
//   let flagSpecialchar = false
//   let flagdigits = false
//   let flagUpperCase = false;
//   let flagLowerCase = false;
//   for(var letters of password){
//     if(letters.match(specialchar)){
//       flagSpecialchar = true
//     }else if(letters.match(digits)){
//       flagdigits = true;
//     }else if(letters.toUpperCase() === letters){
//       flagUpperCase = true;
//     }else if(letters.toLowerCase() === letters){
//       flagLowerCase = true;
//     }

//   }
//   if(password.length >= 8 & flagLowerCase & flagSpecialchar & flagUpperCase & flagdigits ){
//     return "Password is valid";
//   }else{
//     return "Password is invalid"
//   }

// }
//2nd approach
function checkPassword(password){
  let islowercase = /[a-z]/
  let isUppercase = /[A-Z]/
  let isSpecialCharCase = /[!@#$%^&*]/
  let isdigits = /[0-9]/
  let islengthMatched= /.{8,}/
  const isValid = islowercase.test(password)
  && isUppercase.test(password)
  && isSpecialCharCase.test(password)
  && isdigits.test(password)
  && islengthMatched.test(password);
  return isValid ? "Password is Valid" : "Password is Invalid";
}
console.log(checkPassword("Ayush@,123"))