// example 1 function
// function user(name, age) {
//   const getFullInfo = () => {
//     return `${name} - ${age}`;
//   };
//   return { name, age, getFullInfo };
// }
// let userOne = user("mindia", 40);
// let userTwo = user("beqa", 20);

// console.log(userOne.getFullInfo());

// ! example 2 class
class User3 {
  name = null;
  age = null;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getFullInfo = () => {
    return `${this.name} - ${this.age}`;
  };
}
const giorgi = new User3("giorgi", 20);
console.log(giorgi.getFullInfo());
