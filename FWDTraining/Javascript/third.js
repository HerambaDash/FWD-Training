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
  let myPromise = new Promise(function (myResolve, myReject) {
    let x = 1;

    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  try {
    let result = await myPromise;
    document.getElementById("promise").innerHTML = result;
  } catch (error) {
    document.getElementById("promise").innerHTML = error;
  }
}

function handleChange(e) {
  let ele = document.getElementById("error");
  if (e.target.value.length < 5) {
    ele.style.display = "block";
    ele.innerHTML = "Length should be greater than 5";
    ele.style.color = "red";
  } else {
    ele.style.display = "block";
    ele.innerHTML = "Looks good";
    ele.style.color = "green";
  }
}

function handleRefClick(e) {
  e.preventDefault();
  e.stopPropagation();
}

document.getElementById("url").removeEventListener("click", handleRefClick);

function promiseText(result) {
  document.getElementById("promise").innerHTML = result;
}
