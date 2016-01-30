var App = App || {};
App.HelloWorld = (function() {
	function Greet(name) {
		name = typeof name === "undefined" ? "stranger" : name;
    AddItem("Hi there, " + name);
	}

  function AddItem(text) {
    var greeting = document.createElement("li");
    greeting.appendChild(document.createTextNode(text));
		document.getElementById("container").appendChild(greeting);
  }

	return {
    AddItem: AddItem,
		Greet: Greet
	}
})();
