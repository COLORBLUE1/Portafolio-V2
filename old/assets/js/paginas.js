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

/* Menu hamburgesa */

// Función para mostrar la sección correspondiente y ocultar las demás
function mostrarSeccionmenu(seccion) {
  // Obtener todas las secciones
  var secciones = document.querySelectorAll(".seccion");
  var menuItems = document.querySelectorAll(".menu-items li");

  // Ocultar todas las secciones
  secciones.forEach(function (item) {
    item.style.display = "none";
  });

  // Mostrar la sección correspondiente
  var seccionAMostrar = document.getElementById(seccion);
  if (seccionAMostrar) {
    seccionAMostrar.style.display = "flex";
    document.getElementById("popup").style.display = "none";
    // Realiza scroll hacia arriba
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Mostrar secciones adicionales si se muestra la sección 'sobre-mi'
  if (seccion === "sobre-mi") {
    var sobreMi2 = document.getElementById("sobre_mi_2");
    if (sobreMi2) sobreMi2.style.display = "flex";
    document.getElementById("popup").style.display = "none";
    // Realiza scroll hacia arriba
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Remover la clase 'active' de todos los elementos de menú
  menuItems.forEach(function (item) {
    item.classList.remove("active");
  });

  // Agregar la clase 'active' al elemento de menú seleccionado
  var menuItemActivo = document.querySelector(
    '.menu-items li[value="' + seccion + '"]'
  );
  if (menuItemActivo) {
    menuItemActivo.classList.add("active");
  }

  // Ocultar el menú al hacer clic en un elemento del menú
  var menu = document.querySelector(".menu");
  menu.classList.remove("open");
}

// Ejecutar la función inicialmente para mostrar la primera sección por defecto
mostrarSeccionmenu("sobre-mi");
mostrarSeccionmenu("sobre_mi_2");

document.addEventListener("DOMContentLoaded", function () {
  var menuBtn = document.querySelector(".menu-btn");
  var menu = document.querySelector(".menu");
  var popupTrigger = document.querySelector(
    '.menu-items li[data-popup-open="popup-1"]'
  );
  var popup = document.getElementById("popup-1");

  // Event listener para abrir y cerrar el menú al hacer clic en el botón del menú
  menuBtn.addEventListener("click", function (event) {
    event.stopPropagation(); // Evita que el evento de cierre se propague al documento
    menu.classList.toggle("open");
    menuBtn.classList.toggle("open");
  });

  // Event listener para cerrar el menú al hacer clic fuera de él
  document.addEventListener("click", function (event) {
    if (!menu.contains(event.target) && event.target !== popupTrigger) {
      menu.classList.remove("open");
      menuBtn.classList.remove("open");
    }
  });

  // Event listener para abrir el popup al hacer clic en el elemento 'CONTACTOS'
  popupTrigger.addEventListener("click", function (event) {
    event.stopPropagation(); // Evita que el evento de cierre se propague al documento
    popup.style.display = "block"; // Muestra el popup
    menu.classList.remove("open"); // Cierra el menú
    menuBtn.classList.remove("open"); // Remueve la clase 'open' del botón del menú
  });

  // Función para cerrar el popup (si es necesario)
  function closePopup() {
    popup.style.display = "none"; // Oculta el popup
  }

  // Event listener para cerrar el popup si se hace clic fuera de él
  document.addEventListener("click", function (event) {
    if (event.target !== popupTrigger && event.target !== popup) {
      closePopup();
    }
  });
});

