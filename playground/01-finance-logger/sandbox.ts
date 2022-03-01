// npm i -g typescript
// tsc sandbox.tsb -w

// const character = "luigi";

// console.log(character);

// const inputs = document.querySelectorAll("input");

// console.log(inputs);

// inputs.forEach((input) => console.log(input));

// TYPE BASICS
// let character = "luigi";
// let age = 30;
// let isBlackBelt = false;

// // character = 30;
// character = "mario";

// // age = 'yoshi'
// age = 40;

// // isBlackBelt = 'yes';
// isBlackBelt = true;

// const circ = (diameter: number) => diameter * Math.PI;

// // console.log(circ("hello"));
// console.log(circ(7.5));

// OBJECTS & ARRAYS
// arrays
let names = ["luigi", "mario", "yoshi"];
// names = 'hello'
// names.push(3)
// names[0] = 3;
names.push("toad");

let numbers = [10, 20, 30, 40];
// numbers.push('luigi')
// numbers[1] = "shaun"
numbers.push(25);

let mixed = ["ken", 5, "chun-li", 8, 9];
mixed.push("ryu");
mixed.push(10);
mixed[0] = 3;

// objects
let ninja = { name: "mario", belt: "black", age: 30 };
// ninja.age = '30';
// ninja.skills = ['fighting', 'sneaking'];
ninja = {
  name: "yoshi",
  belt: "orange",
  age: 40,
};
ninja.name = "ryu";
ninja.age = 30;
