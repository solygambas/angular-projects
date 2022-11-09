"use strict";
const button = document.querySelector("button");
button.addEventListener("click", () => {
    console.log("clicked");
});
const add = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);
