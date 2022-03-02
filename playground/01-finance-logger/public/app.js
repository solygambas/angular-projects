"use strict";
// const anchor = document.querySelector("a")!; // ! to say that we know it won't be null
// console.log(anchor.href);
// const form = document.querySelector('form')! // HTMLFormElement
const form = document.querySelector(".new-item-form"); // Element or null otherwise
console.log(form.children); // [div.field, div.field, div.field, div.field, button]
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
