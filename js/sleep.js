var App = App || {};

App.Sleep = (function() {
  var frequency;
  var count = 0;

  function Init(customFrequency) {
    frequency = customFrequency
    doStuff();
  }

  function doStuff() {
    App.HelloWorld.AddItem("Lap " + count);
    count = count + 1;
    setTimeout(doStuff, frequency);
  }

  return {
    Init: Init
  }
})();
