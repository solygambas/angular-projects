type Admin = {
  // interface Admin {
  name: string;
  privileges: string[];
};

type Employee = {
  // interface Employee {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Admin, Employee {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

function addNumbers(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
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

  loadCargo(amount: number) {
    console.log("Loading cargo ... " + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicule: Vehicle) {
  vehicule.drive();
  //   if ("loadCargo" in vehicule) {
  if (vehicule instanceof Truck) {
    vehicule.loadCargo(1000);
  }
}

// useVehicle(v1);
// useVehicle(v2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
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
const paragraph = document.getElementById(
  "message-output"
) as HTMLParagraphElement;
// console.log(paragraph);

// const userInput = <HTMLInputElement>document.getElementById("user-input")!;
// const userInput = document.getElementById("user-input")! as HTMLInputElement;
const userInput = document.getElementById("user-input");
if (userInput) {
  (userInput as HTMLInputElement).value = "Hi there";
}

// console.log(userInput.value);
