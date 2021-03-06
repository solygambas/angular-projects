// npm i -g typescript
// tsc sandbox.tsb -w
// tsc --init
// tsc

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
// let names = ["luigi", "mario", "yoshi"];
// // names = 'hello'
// // names.push(3)
// // names[0] = 3;
// names.push("toad");

// let numbers = [10, 20, 30, 40];
// // numbers.push('luigi')
// // numbers[1] = "shaun"
// numbers.push(25);

// let mixed = ["ken", 5, "chun-li", 8, 9];
// mixed.push("ryu");
// mixed.push(10);
// mixed[0] = 3;

// // objects
// let ninja = { name: "mario", belt: "black", age: 30 };
// // ninja.age = '30';
// // ninja.skills = ['fighting', 'sneaking'];
// ninja = {
//   name: "yoshi",
//   belt: "orange",
//   age: 40,
// };
// ninja.name = "ryu";
// ninja.age = 30;

// EXPLICIT TYPES
// let character: string;
// let age: number;
// let isLoggedIn: boolean;

// // age = 'luigi';
// age = 30;
// // isLoggedIn = 25;
// isLoggedIn = true;

// // arrays
// let ninjas: string[] = [];
// ninjas.push("shaun");
// ninjas = ["yoshi", "mario"];

// // union types
// let mixed: (string | number | boolean)[] = [];
// mixed.push(false);
// mixed.push(20);
// mixed.push("hello");

// let uid: string | number;
// // uid = false
// uid = "123";
// uid = 123;

// // objects
// let ninjaOne: object;
// ninjaOne = { name: "yoshi", age: 30 };
// let ninjaTwo: {
//   name: string;
//   age: number;
//   belt: string;
// };
// ninjaTwo = {
//   name: "mario",
//   belt: "black",
//   age: 20,
// };

// DYNAMIC (ANY) TYPES
// unkown and never are more appropriate
// https://mariusschulz.com/blog/the-unknown-type-in-typescript
// The unknown type is only assignable to the any type and the unknown type itself.
// https://www.tutorialsteacher.com/typescript/typescript-never
// let age: any = 25;
// age = true;
// age = "hello";
// age = { name: "luigi" };
// let mixed: any[] = [];
// mixed.push(5);
// mixed.push("mario");
// mixed.push(false);
// let ninja: { name: any; age: any };
// ninja = { name: "yoshi", age: 25 };
// console.log("test");

// FUNCTIONS
// let greet: Function;
// // greet = 'hello'

// greet = () => {
//   console.log("hello, world");
// };

// const add = (a: number, b: number = 10, c?: number | string): void => {
//   console.log(a + b);
//   console.log(c); // undefined
// };

// add(5, 10);

// // const minus = (a: number, b: number) => {
// //   return a + b;
// // };
// const minus = (a: number, b: number): number => {
//   return a + b;
// };

// let result = minus(10, 7);
// // result = 'something else'

// // type aliases
// type StringOrNum = string | number;
// type objWithName = { name: string; uid: StringOrNum };

// const add = (a: number, b: number = 10, c?: StringOrNum): void => {
//   console.log(a + b);
//   console.log(c); // undefined
// };

// const greet = (user: objWithName) => {
//   console.log(`${user.name} says hello`);
// };

// // function signatures
// let greet: (a: string, b: string) => void;
// greet = (name: string, greeting: string) => {
//   console.log(`${name} says ${greeting}`);
// };
// let calc: (a: number, b: number, c: string) => number;
// calc = (numOne: number, numTwo: number, action: string) => {
//   if (action === "add") {
//     return numOne + numTwo;
//   } else {
//     return numOne - numTwo;
//   }
// };
// type person = { name: string; age: number };
// let logDetails: (obj: person) => void;
// logDetails = (ninja: person) => {
//   console.log(`${ninja.name} is ${ninja.age} years old`);
// };

// interfaces
// interface IsPerson {
//   name: string;
//   age: number;
//   speak(a: string): void;
//   spend(a: number): number;
// }

// const me: IsPerson = {
//   name: "shaun",
//   age: 30,
//   speak(text: string): void {
//     console.log(text);
//   },
//   spend(amount: number): number {
//     console.log("I spent", amount);
//     return amount;
//   },
// };

// const greetPerson = (person: IsPerson) => {
//   console.log("hello", person.name);
// };
// greetPerson(me);

// GENERICS
// const addUID = (obj: object) => { // will not remember object properties
// const addUID = <T>(obj: T) => { // wild card for any type, will remember object properties
// const addUID = <T extends object>(obj: T) => {
// const addUID = <T extends { name: string; age: number }>(obj: T) => {
//   // will remember object properties
//   let uid = Math.floor(Math.random() * 100);
//   return { ...obj, uid };
// };

// let docOne = addUID({ name: "yoshi", age: 30 });
// // let docTwo = addUID("hello")
// console.log(docOne.name);

// // with interfaces
// interface Ressource<T> {
//   uid: number;
//   ressourceName: string;
//   data: T; // dynamic type
// }

// const docThree: Ressource<string> = {
//   // give the type as argument
//   uid: 1,
//   ressourceName: "person",
//   data: "shaun",
// };

// const docFour: Ressource<string[]> = {
//   // give the type as argument
//   uid: 1,
//   ressourceName: "person",
//   data: ["shaun"],
// };

// ENUMS
// enum RessourceType {
//   BOOK,
//   AUTHOR,
//   FILM,
//   DIRECTOR,
//   PERSON,
// }

// interface Ressource<T> {
//   uid: number;
//   ressourceName: RessourceType;
//   data: T; // dynamic type
// }

// const docThree: Ressource<string> = {
//   // give the type as argument
//   uid: 1,
//   ressourceName: RessourceType.AUTHOR,
//   data: "shaun",
// };

// const docFour: Ressource<string[]> = {
//   // give the type as argument
//   uid: 1,
//   ressourceName: RessourceType.PERSON,
//   data: ["shaun"],
// };

// TUPLES
let arr = ["ryu", 25, true];
arr[0] = false;
arr[1] = "yoshi";
arr = [30, false, "yoshi"];

let tup: [string, number, boolean] = ["ryu", 25, true]; // fixed types once defined
