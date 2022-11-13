var _a;
const e1 = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
};
function printEmployeeInformation(emp) {
    console.log("Name: " + emp.name);
    if ("privileges" in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("Start date: " + emp.startDate);
    }
}
// printEmployeeInformation(e1);
// printEmployeeInformation({ name: "Manu", startDate: new Date() });
class Car {
    drive() {
        console.log("Driving...");
    }
}
class Truck {
    drive() {
        console.log("Driving a truck...");
    }
    loadCargo(amount) {
        console.log("Loading cargo ... " + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicule) {
    vehicule.drive();
    //   if ("loadCargo" in vehicule) {
    if (vehicule instanceof Truck) {
        vehicule.loadCargo(1000);
    }
}
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log("Moving at speed " + speed);
}
// moveAnimal({ type: "bird", flyingSpeed: 25 });
// moveAnimal({ type: "horse", runningSpeed: 50 });
// const paragraph = document.querySelector("p");
const paragraph = document.getElementById("message-output");
const errorBag = {
    email: "Not a valid email",
    username: "Must start with a capital character",
};
function addNumbers(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = addNumbers(1, 5);
const result2 = addNumbers("Max", "Manu");
const result3 = addNumbers(1, "Manu");
const result4 = addNumbers("Max", 2);
const fetchedUserData = {
    id: "u1",
    name: "Max",
    job: { title: "CEO", description: "My own company" },
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = null;
const storedData = userInput !== null && userInput !== void 0 ? userInput : "DEFAULT";
console.log(storedData);
