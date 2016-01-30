var App = App || {};

App.Sleep = (function () {
  var delay;
  var count = 0;

  function Init(_delay) {
    delay = _delay
    doStuff();
  }

  function doStuff() {
    App.HelloWorld.AddItem("Lap " + count);
    count = count + 1;
    setTimeout(doStuff, delay);
  }

  return {
    Init: Init
  }
}());
