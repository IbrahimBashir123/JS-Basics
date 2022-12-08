document.getElementById(`validate`).onclick = function () {
  var one = document.getElementById(`name`).value;
  var x = document.getElementById(`surname`).value;
  var y = document.getElementById(`city`).value;

  alert("Name: " + one + "\nSurname: " + x + "\nCity: " + y);
};
