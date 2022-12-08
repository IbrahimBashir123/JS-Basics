document.getElementById("validate").onclick = function () {
  var x = document.getElementById("shoe_size").value;
  var y = document.getElementById("year").value;
  var product = (x * 2 + 5) * 50 - y + 1766;
  alert(product);
  //   let data = window.prompt("Enter your shoe_size and bday");
  // alert("Hello, " + data);

  //   window.prompt("What's your shoe size and your bday birth year");
  //   alert("shoe_size: " + x + "year: " + y + "\nproduct: " + product);
};
