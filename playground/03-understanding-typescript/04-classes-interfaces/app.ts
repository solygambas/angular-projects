interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

let user1: Person;
user1 = {
  name: "Max",
  age: 30,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

user1.greet("Hi there - I am");

interface Named {
  readonly name: string;
  outputName?: string;
  myMethod?(): void;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;
  optional?: string;

  constructor(n: string, o?: string) {
    this.name = n;
    if (o) {
      this.optional = o;
    }
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

const user2 = new Person("Manuel");
user2.greet("Hi there - I am");

// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => n1 + n2;
