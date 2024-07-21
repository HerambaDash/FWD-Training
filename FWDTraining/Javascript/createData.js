const fs = require("fs");

let customers = {};
let departments = {};
let paginatedCustomers = {};
let paginatedDepartments = {};

for(let i = 0; i < 50; ++i) {
  customers = { ...customers, ["TFRHY-"+ i] : {
    customerId: "TFRHY-"+ i,
    departmentId: "DEPTXE-" + i + "ER",
    name : "John Doe",
    email : "exapmle@gmail.com",
    tms : "23 GB"
  }};
  paginatedCustomers = {
    ...paginatedCustomers, [Math.ceil((i+1) / 10)] : {
      ...paginatedCustomers[Math.ceil((i+1) / 10)], ["TFRHY-"+ i] : {
        customerId: "TFRHY-"+ i,
        departmentId: "DEPTXE-" + i + "ER",
        name : "John Doe",
        email : "exapmle@gmail.com",
        tms : "23 GB"
      }
    }
  }
  departments = { ...departments, ["DEPTXE-"+ i + "ER"] : {
    departmentId: "DEPTXE-"+ i + "ER",
    departmentIncharge: "Sam Harris",
    name : "Editors Guild",
    size: 46,
    tms : "23 GB"
  }};
  paginatedDepartments = {
    ...paginatedDepartments, [Math.ceil((i+1) / 10)] : {
      ...paginatedDepartments[Math.ceil((i+1) / 10)], ["DEPTXE-"+ i + "ER"] : {
        departmentId: "DEPTXE-"+ i + "ER",
        departmentIncharge: "Sam Harris",
        name : "Editors Guild",
        size: 46,
        tms : "23 GB"
      }
    }
  }
}

let db = {
  customers : customers,
  departments : departments,
  paginatedCustomers : paginatedCustomers,
  paginatedDepartments : paginatedDepartments
}


fs.writeFileSync("./db.json", JSON.stringify(db, null, 2));
