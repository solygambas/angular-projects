class Department {
  // private readonly id: string;
  // private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  // admins: string[];

  constructor(id: string, public admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  // reports: string[];

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addReport(text: string) {
    this.reports.push(text);
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

const accounting = new AccountingDepartment("2", []);
accounting.addReport("Something went wrong...");
accounting.printReports();
