//Destructring in js
//destructuring in array

let colors = ['pink', 'blue', 'yellow', 'red', 'violet', 'blue'];

//suppose we want to access first element of an arry,third,sec,fifth
//without destructring we do like this

// let color1 = colors[0];
// let color2 = colors[1];
// let color3 = colors[3];
//so manually we do like this we write three line of code here but we can write one line of code too

let [color1, color2, color3] = colors;
console.log(color1, color2, color3);

//suppose we want to access third element from an array 
let [, , thirdColor] = colors;
console.log(thirdColor)//yellow

//destructring in js

let person = {
  name: "Sarthak Tripathi",
  age: 16,
  address: {
    city: "Noida",
    location: "UP"
  }
}
//now we want to access name and age from object person
console.log(person.name);
console.log(person.age);

const { name: username, age: userage } = person;
console.log(`user's name is ${username} and age: ${userage}`)