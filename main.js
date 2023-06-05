/* NAV */
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
/* END NAV */

// Fecha y hora del evento (puedes ajustarla según tus necesidades)
var eventDate = new Date("2023-06-21T00:00:00");

function updateCountdown() {
  var now = new Date();
  var timeDifference = eventDate - now;

  var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
    .toString()
    .padStart(2, "0");
  var hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
    .toString()
    .padStart(2, "0");
  var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
    .toString()
    .padStart(2, "0");
  var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)
    .toString()
    .padStart(2, "0");

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

// Actualiza el contador cada segundo
updateCountdown(); // Actualización inicial
setInterval(updateCountdown, 1000); // Actualizaciones periódicas

// get <a> and change the content of the button
const link = document.querySelector(".other-text");

// Change Content for the button in Mobile Screen
if (window.innerWidth <= 768) {
  link.textContent = "See patient stories";
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
