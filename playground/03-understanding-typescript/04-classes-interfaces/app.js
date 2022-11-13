let user1;
user1 = {
    name: "Max",
    age: 30,
    greet(phrase) {
        console.log(phrase + " " + this.name);
    },
};
user1.greet("Hi there - I am");
class Person {
    constructor(n, o) {
        this.age = 30;
        this.name = n;
        if (o) {
            this.optional = o;
        }
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
}
const user2 = new Person("Manuel");
user2.greet("Hi there - I am");
let add;
add = (n1, n2) => n1 + n2;
