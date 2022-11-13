const e1 = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
};
function addNumbers(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
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
// console.log(paragraph);
// const userInput = <HTMLInputElement>document.getElementById("user-input")!;
// const userInput = document.getElementById("user-input")! as HTMLInputElement;
const userInput = document.getElementById("user-input");
if (userInput) {
    userInput.value = "Hi there";
}
// console.log(userInput.value);
