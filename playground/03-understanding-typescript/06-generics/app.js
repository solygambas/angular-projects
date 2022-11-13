// const names: Array<string> = [];
// names[0].split(' ')
function countAndDescribe(element) {
    let descriptionText = "Got no value.";
    if (element.length === 1) {
        descriptionText = "Got 1 element.";
    }
    else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements.";
    }
    return [element, descriptionText];
}
// console.log(countAndDescribe("Hi there!"));
// console.log(countAndDescribe(["Sports", "Cooking"]));
// console.log(countAndDescribe([]));
function extractAndConvert(obj, key) {
    return obj[key];
}
// console.log(extractAndConvert({ name: "Max" }, "name"));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
// const textStorage = new DataStorage<string>();
// textStorage.addItem("Max");
// textStorage.addItem("Manu");
// textStorage.removeItem("Max");
// console.log(textStorage.getItems());
const numberStorage = new DataStorage();
numberStorage.addItem(1);
numberStorage.addItem(15);
numberStorage.removeItem(1);
console.log(numberStorage.getItems());
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.date = date;
    return courseGoal;
}
const names = ["Max", "Anna"];
// names.push("Manu");
