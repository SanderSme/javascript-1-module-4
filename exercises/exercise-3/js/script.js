//i want when i click the button the color of the circle turns yellow #fce127
//i want when i refresh the site the circle stays yellow

//1. select the circle by class
//2. select the btn by its id

const circle = document.querySelector(".circle");
const BTN = document.querySelector("#circleBTN");

//3. when i click button  show a message

//get the bgColor and changes my circle color

const bgColor = localStorage.getItem("bgColor");
circle.style.backgroundColor = bgColor;

BTN.addEventListener("click", function () {
  //setting the color on our locol storage
  localStorage.setItem("bgColor", "#fce127");
  //4. change the background color of the circle to be #fce127(sun)
  circle.style.backgroundColor = "#fce127";
});

//localStorage

//1. localStorage
// localStorage.setItem("name", "Sander");

// const name = localStorage.getItem("name");
// console.log(name);
