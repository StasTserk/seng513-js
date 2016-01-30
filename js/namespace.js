/********** NAMESPACE DECLARATION *************/
// Create namespace if it doesn't exist yet
var App = App || {};

// Conceptually equivalent to:
if(typeof OtherNamespace === "undefined") {
  var OtherNamespace = {}
} else {
  // Nothing to do
}

// It only works because of variable hoisting. 
// The following throws an error because ProblematicNamespace is not defined
//> if(!ProblematicNamespace) { }

// as does the following
//> OtherProblematicNamespace || {};

// Variable hoisting means the namespace pattern is functionally equivalent to:
var VerboseNamespace;
VerboseNamespace = VerboseNamespace || {};

/********* USING A NAMESPACE *****************/
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
