// Write your code here
//first approach using class
// class User{
//   #username
//   #password
//   constructor(username,password,age){
//     this.#username = username;
//     this.#password = password;
//     this.age = age;
//   }

//   getUsername(){
//     return this.#username;
//   }
// }

// const user = new User("Ayush",1234,20);
// console.log(user.getUsername())
// console.log(user.username)

//second approach using symbols

const username = Symbol("username");
const password = Symbol("password");

const user = {
  [username] : "Ayush",
  [password] : "12345",
  age : 20
}

console.log(user.username);
