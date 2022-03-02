import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

// const anchor = document.querySelector("a")!; // ! to say that we know it won't be null
// console.log(anchor.href);

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice("yoshi", "web work", 2500);
docTwo = new Payment("mario", "plumbing work", 3000);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

const invoiceOne = new Invoice("mario", "work on the mario website", 2500);
const invoiceTwo = new Invoice("luigi", "work on the luigi website", 3000);
// console.log(invoiceOne, invoiceTwo);
let invoices: Invoice[] = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
// console.log(invoices);
invoices.forEach((inv) => {
  console.log(inv.client, inv.amount, inv.format());
});

// const form = document.querySelector('form')! // HTMLFormElement
const form = document.querySelector(".new-item-form") as HTMLFormElement; // Element or null otherwise
// console.log(form.children); // [div.field, div.field, div.field, div.field, button]

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
