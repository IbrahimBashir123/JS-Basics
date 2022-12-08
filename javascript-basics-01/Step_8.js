document.getElementById("validate").onclick = function () {
  var user = document.getElementById("age").value;
  var over = 18;
  if (user >= over) {
    alert("you are over 18");
  } else {
    alert("Your under 18");
  }
};
