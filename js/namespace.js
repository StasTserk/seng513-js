// Create namespace if it doesn't exist yet
var App = App || {};

// Add a function to the namespace
App.bedazzleTheWebsite = function() {
  var boring = document.getElementById("boring");
  var someColors = ["green", "blue", "pink", "yellow", "red"];
  var randomColorIndex = parseInt(Math.random() * 5);
  boring.style.backgroundColor = someColors[randomColorIndex];
}
