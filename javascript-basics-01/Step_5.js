    document.getElementById("validate").onclick = function () { 
    var numOne = document.getElementById('first_number').value;
    var numTwo = document.getElementById('second_number').value;
    var product = parseInt(numOne) * parseInt(numTwo);

    window.prompt("Do u want to make a Multiplication")
    alert("first_number: " + numOne + "\nsecond_number: " + numTwo + "\nproduct: " + product);
   };