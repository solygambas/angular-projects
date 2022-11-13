class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private readonly id: string;
        // private name: string;
        this.employees = [];
        // this.id = id
        // this.name = n;
        // console.log(Department.fiscalYear)
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2049;
class ITDepartment extends Department {
    // admins: string[];
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
        this.admins = admins;
    }
    describe() {
        console.log("IT department - ID: " + this.id);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found");
    }
    set mostRecentReport(value) {
        if (value === "") {
            throw new Error("Please pass a valid value");
        }
        this.addReport(value);
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment("2", []);
        return this.instance;
    }
    describe() {
        console.log("Accounting department - ID: " + this.id);
    }
    addEmployee(name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
// const accounting = new Department("1", "Accounting");
// const it = new ITDepartment("1", ["Max"]);
// console.log(accounting);
// accounting.describe();
// it.describe();
// const accountingCopy = { name: "Sales", describe: accounting.describe };
// accountingCopy.describe();
// accounting.addEmployee("Max");
// accounting.addEmployee("Manu");
// accounting.employees[2] = "Anna";
// accounting.printEmployeeInformation();
// it.addEmployee("Max");
// it.addEmployee("Manu");
// it.printEmployeeInformation();
// console.log(it);
// const accounting = new AccountingDepartment("2", []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
// accounting.addReport("Something went wrong...");
// accounting.printReports();
// accounting.addEmployee("Max");
// accounting.addEmployee("Manu");
// accounting.printEmployeeInformation();
// accounting.mostRecentReport = "A new report";
// accounting.mostRecentReport = "";
// console.log(accounting.mostRecentReport);
// const employee1 = Department.createEmployee("Max");
// console.log(employee1);
// console.log(Department.fiscalYear);
accounting.describe();
accounting2.describe();
