// examle 1 function
function user(name, age) {
  return { name, age };
}
let userOne = user("mindia", 200);
let userTwo = user("beqa", 20);
console.log(userOne, userTwo);

//! example 1 class
class User2 {
  name = null;
  age = null;

  constructor(name, age) {
    console.log(name, age);
  }
}
const userClassOne = new User2("Giorgi", 10);
const userClassTwo = new User2("ani", 10);
