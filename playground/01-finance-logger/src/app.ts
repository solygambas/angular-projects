// const anchor = document.querySelector("a")!; // ! to say that we know it won't be null

// console.log(anchor.href);

// const form = document.querySelector('form')! // HTMLFormElement
const form = document.querySelector(".new-item-form") as HTMLFormElement; // Element or null otherwise
console.log(form.children); // [div.field, div.field, div.field, div.field, button]

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
