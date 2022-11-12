import _ from "lodash";
import "reflect-metadata";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";

declare const GLOBAL: string;

import Product from "./product.model";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Vite + TypeScript</h1>
  </div>
`;

// console.log(_.shuffle([1, 2, 3]));

// console.log(GLOBAL);

// const p1 = new Product("A book", 12.99);

const products = [
  { title: "A carpet", price: 29.99 },
  { title: "A book", price: 10.99 },
];

// const loadedProducts = products.map((product) => {
//   return new Product(product.title, product.price);
// });

const loadedProducts = plainToInstance(Product, products);

for (const product of loadedProducts) {
  console.log(product.getInformation());
}

const newProduct = new Product("", -5.99);

validate(newProduct).then((errors) => {
  if (errors.length > 0) {
    console.log("validation failed");
    console.log(errors);
  } else {
    console.log(newProduct.getInformation());
  }
});

export {};
