// -------------HOME SLIDER RIGHT JS--------------
const rightbtn = document.querySelector(".fa-chevron-right");
const leftbtn = document.querySelector(".fa-chevron-left");
const imgNumber = document.querySelectorAll(".banner-left__img");
let i = 0;

rightbtn.addEventListener("click", function () {
  i = i + 1;
  if (i > imgNumber.length - 1) {
    i = 0;
  }
  document.querySelector(".banner-left").style.right = i * 100 + "%";
});
leftbtn.addEventListener("click", function () {
  i = i - 1;
  if (i <= 0) {
    i = imgNumber.length - 1;
  }
  document.querySelector(".banner-left").style.right = i * 100 + "%";
});
