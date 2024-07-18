const fs = require("fs");

let data = [];

for(let i = 0; i < 50; ++i) {
  data.push({
    customerId: "TFRHY-" + i,
    departmentId: "DEPTXE-"+ i + "ER",
    name : "GFTH",
    email: "example@gmail.com",
    tms : "23 GB"
  })
}

fs.writeFileSync("./data.json", JSON.stringify(data, null, 2));
