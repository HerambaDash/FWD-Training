const fs = require("fs");

let data = [];

for(let i = 0; i < 50; ++i) {
  data.push({
    departmentId: "DEPTXE-"+ i + "ER",
    departmentIncharge: "Sam Harris",
    name : "Editors Guild",
    size: 46,
    tms : "23 GB"
  })
}

fs.writeFileSync("./departmentData.json", JSON.stringify(data, null, 2));
