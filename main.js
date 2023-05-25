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
var eventDate = new Date('2023-06-01T00:00:00');

function updateCountdown() {
    var now = new Date();
    var timeDifference = eventDate - now;

    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
    var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000).toString().padStart(2, '0');

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Actualiza el contador cada segundo
updateCountdown(); // Actualización inicial
setInterval(updateCountdown, 1000); // Actualizaciones periódicas

