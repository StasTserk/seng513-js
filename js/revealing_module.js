var App = App || {};
App.HelloWorld = (function () {
  // Private variable
  var startOfGreeting = "Hi there, ";

  // Public function
  function Greet(name) {
    name = typeof name === "undefined" ? "stranger" : name;
    AddItem(startOfGreeting + name);
  }

  // Public function
  function AddItem(text) {
    document.getElementById("container").appendChild(createListElement(text));
  }

  // Private function
  function createListElement(text) {
    var listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(text));
    return listItem;
  }

  // Create an object liternal containing references to the functions that
  //  should be public, and return it
  return {
    AddItem: AddItem,
    Greet: Greet
  };
}());
