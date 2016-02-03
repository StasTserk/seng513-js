function MakeRequest() {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState == 4) {
      Callback(request);
    }
  }
  request.open('GET', 'Date.php', true);
  request.send(null);
}

function Callback(response) {
   document.getElementById("text").innerHTML = 'The date is ' + response.responseText;
}
