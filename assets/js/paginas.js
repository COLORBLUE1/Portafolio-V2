/**
 * Cambiar proyectos de diseño a programacio y al reves
 */

const navItems = document.querySelectorAll("#proyectos-id li");
const programacionSection = document.getElementById("programacion");
const diseñoSection = document.getElementById("diseño");

document.getElementById("active").style.width = "100px";

document.getElementById("active").style.height = "20px";
document.getElementById("active").style.borderRadius = "20px";
document.getElementById("active").style.backgroundColor = "rgb(255 255 255)";
document.getElementById("active").style.border =
  "1px solid rgb(255 255 255 / 47%)";
document.getElementById("active").style.boxShadow =
  "3px 1px 17px -6px rgb(0 0 0 / 69%)";
document.getElementById("active").style.padding = "8px";
document.getElementById("active").style.textAlign = "center";

navItems.forEach((navItem) => {
  navItem.addEventListener("click", (event) => {
    const activeSectionId = event.target.getAttribute("value");

    // Hide all sections initially
    programacionSection.style.display = "none";
    diseñoSection.style.display = "none";

    // Show the active section based on selection
    if (activeSectionId === "1") {
      programacionSection.style.display = "block";
      diseñoSection.style.display = "none";
      // Realiza scroll hacia arriba
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (activeSectionId === "2") {
      programacionSection.style.display = "none";
      diseñoSection.style.display = "block";
      // Realiza scroll hacia arriba
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Update active navigation item background color
    navItems.forEach((item) => {
      item.style.backgroundColor = ""; // Reset all backgrounds
      item.style.transition = "all 1s cubic-bezier(0.91, -0.12, 0.31, 0.94) 0s";
    });
    event.target.style.transition =
      "all 1s cubic-bezier(0.91, -0.12, 0.31, 0.94) 0s";
    event.target.style.width = "100px";
    event.target.style.height = "20px";
    event.target.style.borderRadius = "20px";
    event.target.style.backgroundColor = "rgb(255 255 255)";
    event.target.style.boxShadow = "3px 1px 17px -6px rgb(0 0 0 / 69%)";
    event.target.style.border = "1px solid rgb(255 255 255 / 47%)";
    event.target.style.padding = "8px";
    event.target.style.textAlign = "center";
  });
});

/* Fecha copyright */

const fechaSpan = document.getElementById("año");

function actualizarFecha() {
  const fechaActual = new Date();
  const fechaFormateada = fechaActual.toLocaleDateString("es-ES", {
    year: "numeric",
  });
  fechaSpan.textContent = fechaFormateada;
}

actualizarFecha(); // Actualizar inicialmente la fecha
setInterval(actualizarFecha, 31536000000); // Actualizar cada año

/* Mostrar y ocultar detalles de imagen de perfil */
const yo = document.getElementById("yo");
const text = document.getElementById("detalles");

yo.addEventListener("click", function () {
  if (text.style.display === "block") {
    text.style.display = "none";
  } else {
    text.style.display = "block";
    text.style.top = "160px";
  }
});

/* Menu hamburgesa */

const botonMenu = document.querySelector(".boton-menu");
const menuPrincipal = document.querySelector(".menu-principal");

botonMenu.addEventListener("click", () => {
  menuPrincipal.classList.toggle("activo");
  botonMenu.classList.toggle("is-active");
});

function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function sendMessage() {
  var input = document.querySelector(".input input");
  var message = input.value;

  if (message !== "") {
    var chat = document.querySelector(".chat");
    var newMessage = document.createElement("div");
    newMessage.classList.add("message");
    newMessage.innerHTML = `
      <p class="sender">Tú</p>
      <p class="content">${message}</p>
    `;
    chat.appendChild(newMessage);

    input.value = "";
    input.focus();
  }
}
