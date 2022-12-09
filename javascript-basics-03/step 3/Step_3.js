var div = document.getElementById("text");
document.querySelectorAll(".color").forEach((item) => {
  item.addEventListener("click", function () {
    div.style.color = item.classList[1];
  });
});
