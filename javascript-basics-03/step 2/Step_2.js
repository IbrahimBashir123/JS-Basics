// let showText = document.querySelector("#show");
// let hideText = document.querySelector("#hide");
// let text = document.querySelector("#texte");

// function StyleManipulation() {
//   showText.onclick = function () {
//     texte.style.display = "inline";
//   };
//   hideText.onclick = function () {
//     text.style.display = "none";
//   };
// }
// StyleManipulation();

var button = document.querySelectorAll(`a`);
var paragraph = document.querySelectorAll(`texte`);
button.forEach((showandhide) => {
  showandhide.addEventListener(`click`, (showandhide) => {
    if (showandhide.target.id == `hide`) {
      texte.style = `display: none`;
    } else {
      texte.style = `display:block` ;
     }
  });
 });
