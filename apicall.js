function submitForm(){

var radios = document.getElementsByName('platform');

for (var i = 0, length = radios.length; i < length; i++) {
  if (radios[i].checked) {
    var selectedPlaform = radios[i].value
    alert(radios[i].value);

    // only one radio can be logically checked, don't check the rest
    break;
  }
}

var myWindow = window.open("http://127.0.0.1:5500/results.html");

}






