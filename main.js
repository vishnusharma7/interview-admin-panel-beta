AOS.init( {
    offset: 100, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 500,// values from 0 to 3000, with step 50ms
  });
// ---------------------hamburger---------------------
document.addEventListener('DOMContentLoaded', function () {
  var mobileMenuIcon = document.getElementById('mobile-menu-icon');
  var asideElement = document.querySelector('aside');

  if (mobileMenuIcon && asideElement) {
      mobileMenuIcon.addEventListener('click', function () {
          asideElement.style.display = (asideElement.style.display === 'none' || asideElement.style.display === '') ? 'flex' : 'none';
      });
  }
});

// ---------------------FAQ----------------------------
document.addEventListener("DOMContentLoaded", function () {
  const questionBoxes = document.querySelectorAll(".question-box");

  questionBoxes.forEach(function (box) {
    box.addEventListener("click", function () {
      this.classList.toggle("active");
      
    });
  });
});


// Table head sticky on scroll
// window.onscroll = function () {
//   let scroll = document.documentElement.scrollTop || document.body.scrollTop;
//   if (scroll > 100) {
//     document.querySelector(".table-head").classList.add("sticky-table");
//   } else {
//     document.querySelector(".table-head").classList.remove("sticky-table");
//   }
// };
// window.onscroll = function () {
//   let scroll = document.documentElement.scrollTop || document.body.scrollTop;
//   if (scroll > 100) {
//       document.querySelector("#table-head").style.position = "fixed";
//   } else {
//       document.querySelector("#table-head").style.position = "static";
//   }
// };