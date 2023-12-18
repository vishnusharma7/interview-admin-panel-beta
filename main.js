AOS.init( {
    offset: 100, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 500,// values from 0 to 3000, with step 50ms
  });
// ---------------------hamburger---------------------
const toggleBtn = document.getElementById("mobile-menu-icon");
const toggleBtnIcons = toggleBtn.querySelectorAll("svg");
const dropDownMenu = document.querySelector(".dropdown-menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");
  toggleBtnIcons[0].style.display = isOpen ? "none" : "flex";
  toggleBtnIcons[1].style.display = isOpen ? "flex" : "none";
};
// ---------------------FAQ----------------------------
document.addEventListener("DOMContentLoaded", function () {
  const questionBoxes = document.querySelectorAll(".question-box");

  questionBoxes.forEach(function (box) {
    box.addEventListener("click", function () {
      this.classList.toggle("active");
      
    });
  });
});
// ------------nav on scrollbar------------
window.onscroll = function () {
  let scroll = document.documentElement.scrollTop || document.body.scrollTop;
  if (scroll > 200) {
    document.querySelector(".nav").classList.add("sticky-nav");
  } else {
    document.querySelector(".nav").classList.remove("sticky-nav");
  }
};

