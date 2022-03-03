import { formData } from "./forms";

// console.log("hello");
// console.log("hello again");
// console.log("hello again again");

const form = document.querySelector("form")!;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = formData(form);
  console.log(data);
});

// let person: any = [];
// console.log(person.speak());

// source maps
// person.speak is not a function
// at eval (index.ts?ffb4:16:20)
