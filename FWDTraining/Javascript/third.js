let div1 = document.querySelector("#div1");
let div2 = document.querySelector("#div2");
let div3 = document.querySelector("#div3");

// div1.addEventListener("click", function (event) {
//   alert("Component 1 event clicked");
// });

// div2.addEventListener("click", function (event) {
//   alert("Component 2 event clicked");
// });

// div3.addEventListener("click", function (event) {
//   alert("Component 3 event clicked");
// });

div1.addEventListener("click", function (event) {
  alert("Component 1 event clicked");
}, true);

div2.addEventListener("click", function (event) {
  alert("Component 2 event clicked");
}, true);

div3.addEventListener("click", function (event) {
  alert("Component 3 event clicked");
}, true);

document.getElementById("email").addEventListener("change", handleChange);
document.getElementById("url").addEventListener("click", handleRefClick);
document
  .getElementById("submitButton")
  .addEventListener("click", handleSubmitAsync);

function handleSubmitPromise(e) {
  e.preventDefault();
  // e.stopPropagation();
  // ok ---- error
  let myPromise = new Promise(function (myResolve, myReject) {
    // let xml = new XmlHttpRequest()
  // let em = document.getElementById("name").value;
  // let name = document.getElementById("email").value;
  // let newUser = { name: name, email : em};
  // xml.send(JSON.stringify(newUser));
    let x = 0;
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });

  myPromise.then(
    function (value) {
      promiseText(value);
      // document.getElementById("promise").innerHTML = value;
    },
    function (error) {
      promiseText(error);
    }
  );
}

// const handleSubmitAsync = async (e) => {}
async function handleSubmitAsync(e) {
  e.preventDefault();
  // let myPromise = new Promise(function (myResolve, myReject) {
  //   let x = 1;

  //   if (x == 0) {
  //     myResolve("OK");
  //   } else {
  //     myReject("Error");
  //   }
  // });
  // try {
  //   let result = await myPromise;
  //   document.getElementById("promise").innerHTML = result;
  // } catch (error) {
  //   document.getElementById("promise").innerHTML = error;
  // }
  // localStorage.removeItem("email");
  // localStorage.setItem("email", "heramba@squbix.com");
  // let x = localStorage.getItem("email");
  // console.log(x);
  // email
  // password
  // => server => JSON token => message - Sign in successfully
  /* 
    let customArr = [
      {
        customerId : "23ed",
        departmentId : "sdfvd",
        name : "dfdsf",
        email : "fdss",
        tms : "dsfs"
      },
      {
        customerId : "23edds",
        departmentId : "sdfvd",
        name : "dfdsf",
        email : "fdss",
        tms : "dsfs"
      }, ...20 items
    ];

    let departmentsArr = [ ...20 items];
    localStorage.setItem("customArr", JSON.stringify(customArray));
    localStorage.setItem("departArr", JSON.stringify(departmentsArr));
    localStorage.setItem("myAccount", JSON.stringify(accSingleObject));
    let accInfo = localStorage.getItem("myAccount");
    let accInfoObj = JSON.parse(localStorage.getItem("myAccount"));
    document.getElementById("name").value = accInfoObj.name;
    for( i = 0; i < customArr.slice(10 , 20); ++i) {
      let table = document.getElementById("table");
      let row = document.createElement('tr');
      row.setAttribute("id",  customArr[i].customerId);
      let html = '<td>' + customArr[i].customerId + 
      '</td><td>' + customArr[i].departmentId + 
      '</td><td>' + customArr[i].name + '</td>' + 
      '<td>'+ customArr[i].email + '</td>' +'<td>'+ 
      customArr[i].tms + '</td>';
      row.innerHTML = html;
      table.appendChild(row);
    }
  */
  // let customerTableFirstPage = 1;
  // localStorage.setItem("customerTableFirstPage", "1");
  // let currentTBFP = localStorage.getItem("customerTableFirstPage");
  // let newValue = Number(currentTBFP) - 1;
  // if(currentTBFP == 1) { left arrow button disabled } else { Number(currentTBFP) - 1;}
  // localStorage.setItem("customerTableFirstPage", newValue)
  // <button><i class = "fa-leftArrow"></i></button>
  // (0, 10), (10, 20), (20, 30)
  // customArr.slice(pgNo * 10 - 10, pgNo * 10)
  // let length = customArr.length;
  // let toPgs = length / 10;
  // Math.ceil(toPgs);5.1 6
  // if(pgNo > 6)  { disbale the rightArrowButton }
}

function handleChange(e) {
  // let ele = document.getElementById("error");
  // if (e.target.value.length < 5) {
  //   ele.style.display = "block";
  //   ele.innerHTML = "Length should be greater than 5";
  //   ele.style.color = "red";
  // } else {
  //   ele.style.display = "block";
  //   ele.innerHTML = "Looks good";
  //   ele.style.color = "green";
  // }
  localStorage.setItem("email" ,"akshksahdkj");
}

function handleRefClick(e) {
  e.preventDefault();
  e.stopPropagation();
}

document.getElementById("url").removeEventListener("click", handleRefClick);

function promiseText(result) {
  document.getElementById("promise").innerHTML = result;
}
