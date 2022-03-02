import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
// const anchor = document.querySelector("a")!; // ! to say that we know it won't be null
// console.log(anchor.href);
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice("yoshi", "web work", 2500);
// docTwo = new Payment("mario", "plumbing work", 3000);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
// const invoiceOne = new Invoice("mario", "work on the mario website", 2500);
// const invoiceTwo = new Invoice("luigi", "work on the luigi website", 3000);
// console.log(invoiceOne, invoiceTwo);
// let invoices: Invoice[] = [];
// invoices.push(invoiceOne);
// invoices.push(invoiceTwo);
// console.log(invoices);
// invoices.forEach((inv) => {
//   console.log(inv.client, inv.amount, inv.format());
// });
// const form = document.querySelector('form')! // HTMLFormElement
const form = document.querySelector(".new-item-form"); // Element or null otherwise
// console.log(form.children); // [div.field, div.field, div.field, div.field, button]
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
});
