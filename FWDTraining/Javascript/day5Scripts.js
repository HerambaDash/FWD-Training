function activeHome() {
  document.getElementById("home").classList.add("active");
  document.getElementById("first").classList.remove("active");
  document.getElementById("second").classList.remove("active");
  document.getElementById("third").classList.remove("active");
}
function activeFirst() {
  document.getElementById("home").classList.remove("active");
  document.getElementById("first").classList.add("active");
  document.getElementById("second").classList.remove("active");
  document.getElementById("third").classList.remove("active");
}
function activeSecond() {
  document.getElementById("home").classList.remove("active");
  document.getElementById("first").classList.remove("active");
  document.getElementById("second").classList.add("active");
  document.getElementById("third").classList.remove("active");
}
function activeThird() {
  document.getElementById("home").classList.remove("active");
  document.getElementById("first").classList.remove("active");
  document.getElementById("second").classList.remove("active");
  document.getElementById("third").classList.add("active");
}