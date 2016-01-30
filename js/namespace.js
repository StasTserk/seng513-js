// Create namespace if it doesn't exist yet
var App = App || {};

// Add a function to the namespace
App.bedazzleTheWebsite = function () {
  console.log("App.bedazzleTheWebsite");
  var boring = document.getElementById("boring");
  var someColors = ["green", "blue", "pink", "yellow", "red"];
  var randomColorIndex = parseInt(Math.random() * 5);
  boring.style.backgroundColor = someColors[randomColorIndex];
}

// No conflict with global bedazzleTheWebsite
// Note: this is equivalent to `var bedazzleTheWebsite = function() {`
function bedazzleTheWebsite () {
  console.log("Global bedazzleTheWebsite");
  document.body.style.backgroundColor = document.body.style.backgroundColor === "black" ? "white" : "black";
}
