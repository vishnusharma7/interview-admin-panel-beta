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
document.addEventListener("DOMContentLoaded", function() {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('th[data-sort]');
  let sortOrder = {};

  headers.forEach(header => {
      // Create and append arrow element
      const arrowElement = document.createElement('span');
      arrowElement.className = 'sort-arrows';

      header.appendChild(arrowElement);

      header.addEventListener('click', function() {
          const column = this.getAttribute('data-sort');
          sortOrder[column] = sortOrder[column] === 'asc' ? 'desc' : 'asc';

          // Reset arrows for all headers
          headers.forEach(h => {
              if (h !== header) {
                  h.querySelector('.sort-arrows').innerHTML = ' ';
              }
          });

          // Set arrow based on current sort order
          this.querySelector('.sort-arrows').innerHTML = sortOrder[column] === 'asc' ? ' &#9660;' : ' &#9650;';

          sortTable(table, column, sortOrder[column]);
      });
  });

  function sortTable(table, column, order) {
      const index = Array.from(table.tHead.rows[0].cells).findIndex(th => th.getAttribute('data-sort') === column);
      const rows = Array.from(table.tBodies[0].rows);

      rows.sort((a, b) => {
          const aValue = a.cells[index].textContent.trim();
          const bValue = b.cells[index].textContent.trim();

          if (!isNaN(aValue) && !isNaN(bValue)) {
              return order === 'asc' ? aValue - bValue : bValue - aValue;
          } else {
              return order === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
          }
      });

      // Remove existing rows
      rows.forEach(row => table.tBodies[0].appendChild(row));

      // Append sorted rows
      table.tBodies[0].appendChild(...rows);
  }
});

// pop up
let popup = document.getElementById('popup');

document.addEventListener('mousedown', function(event) {
  if (!popup.contains(event.target)) {
    closePopup();
  }
});

function openPopup() {
  popup.classList.add('open-popup');
}

function closePopup() {
  popup.classList.remove('open-popup');
}




// active page footer no.
function toggleColor(element) {
  // Remove 'active' class from all elements
  var allElements = document.querySelectorAll('.footer-links');
  allElements.forEach(function (el) {
      el.classList.remove('active');
  });

  // Add 'active' class to the clicked element
  element.classList.add('active');
}


var tableRows = document.getElementById('userTable').rows;

for (var i = 0; i < tableRows.length; i++) {
    var email = tableRows[i].cells[4].textContent.trim(); 
    var anchorTag = tableRows[i].querySelector('a');
    anchorTag.href = 'profile.html';

    var editButton = tableRows[i].querySelector('button');
    editButton.addEventListener('click', function() {
        var email = this.parentNode.previousElementSibling.textContent.trim(); 
        window.location.href = 'profiledemo.html';
    });
}


function showLoader() {
 // Create loader element
 var loader = document.querySelector('.loader-container');
            
 // Show the loader
 loader.style.visibility = 'visible';
 loader.style.opacity = 1;

 // Hide the loader after 3 seconds
 setTimeout(function () {
     loader.style.visibility = 'hidden';
     loader.style.opacity = 0;
 }, 3000);
}
