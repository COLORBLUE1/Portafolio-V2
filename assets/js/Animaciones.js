/* Navbar scroll */

window.addEventListener("scroll", function () {
  var navbar = document.getElementById("sections");
  var scrollPosition = window.scrollY;

  if (scrollPosition > 80) {
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0.59)";
    navbar.style.backdropFilter = "blur(5px)";
    navbar.style.transition = "all 0.5s linear";
  } else {
    navbar.style.backgroundColor = "transparent";
    navbar.style.backdropFilter = "blur(0px)";
    navbar.style.transition = "all 0.5s linear";
  }
});

/* Hover skills */
/*Lenguajes */
const lenguajes = document.querySelector(".lenguajes");
const lenguajesItems = document.querySelector(".lenguajes_items");

let timeoutId; // Variable para almacenar el ID del timeout
let isMouseInside = false; // Variable para rastrear si el mouse está dentro

lenguajes.addEventListener("mouseenter", () => {
  clearTimeout(timeoutId); // Limpiar cualquier timeout pendiente
  isMouseInside = true; // Marcar que el mouse está dentro
  lenguajesItems.style.right = "30%";
});

lenguajes.addEventListener("mouseleave", () => {
  isMouseInside = false; // Marcar que el mouse está fuera
  timeoutId = setTimeout(() => {
    if (!isMouseInside) {
      lenguajesItems.style.right = "0px";
    }
  }, 200); // Retraso de 300ms para una transición más suave
});

// Retrasar la transición de salida al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  timeoutId = setTimeout(() => {
    if (!isMouseInside) {
      lenguajesItems.style.right = "0px";
    }
  }, 300); // Retraso de 300ms para una transición más suave
});

/* Desing */
const desing = document.querySelector(".desing");
const desingItems = document.querySelector(".desing_items");

let desingtime; // Variable para almacenar el ID del timeout
let desingMouse = false; // Variable para rastrear si el mouse está dentro

desing.addEventListener("mouseenter", () => {
  clearTimeout(desingtime); // Limpiar cualquier timeout pendiente
  desingMouse = true; // Marcar que el mouse está dentro
  desingItems.style.transition = "left 0.8s ease"; // Agregar una transición suave
  desingItems.style.left = "50%";
});

desing.addEventListener("mouseleave", () => {
  desingMouse = false; // Marcar que el mouse está fuera
  desingItems.style.transition = "left 0.8s ease"; // Agregar una transición suave
  desingtime = setTimeout(() => {
    if (!desingMouse) {
      desingItems.style.left = "0px";
    }
  }, 200); // Retraso de 200ms para una transición más suave
});

// Retrasar la transición de salida al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  desingtime = setTimeout(() => {
    if (!desingMouse) {
      desingItems.style.transition = "left 0.8s ease"; // Agregar una transición suave
      desingItems.style.left = "0px";
    }
  }, 300); // Retraso de 300ms para una transición más suave
});

document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const menu = document.querySelector(".menu");

  menuBtn.addEventListener("click", function () {
    menuBtn.classList.toggle("open");
    menu.classList.toggle("open");
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const swich = document.querySelector(".swich");
  const body = document.querySelector("body");
  const icon_swich = document.querySelector(".swich img"); // Assuming there's an <img> inside .swich for the icon

  // Function to verify if the user has activated the dark mode on the device
  function isDarkModePreferred() {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }

  // Function to toggle between light and dark mode
  function toggleDarkMode() {
    if (body.classList.contains("dark")) {
      body.classList.remove("dark");
      icon_swich.src = "assets/Recursos-img/icons/sun.svg";
      swich.style.backgroundColor = "#424242";
      localStorage.setItem("theme", "light"); // Store theme preference in localStorage
    } else {
      body.classList.add("dark");
      icon_swich.src = "assets/Recursos-img/icons/moon_empy.svg";
      swich.style.backgroundColor = "white";
      localStorage.setItem("theme", "dark"); // Store theme preference in localStorage
    }
    body.style.transition = "background-color 1s ease";
  }

  // Event listener for theme change button click
  swich.addEventListener("click", function () {
    toggleDarkMode();
  });

  // Check localStorage for theme preference on page load
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark") {
    body.classList.add("dark");
    icon_swich.src = "assets/Recursos-img/icons/moon_empy.svg";
    swich.style.backgroundColor = "white";
  } else {
    body.classList.remove("dark");
    icon_swich.src = "assets/Recursos-img/icons/sun.svg";
    swich.style.backgroundColor = "#424242";
  }

  // Automatically switch between light and dark mode based on user preference
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      const newColorScheme = e.matches ? "dark" : "light";
      body.classList.remove("dark", "light");
      body.classList.add(newColorScheme);
      if (icon_swich) {
        icon_swich.src =
          newColorScheme === "dark"
            ? "assets/Recursos-img/icons/moon_empy.svg"
            : "assets/Recursos-img/icons/sun.svg";
      }
      swich.style.backgroundColor =
        newColorScheme === "dark" ? "white" : "#424242";

      localStorage.setItem("theme", newColorScheme); // Update localStorage with new theme preference
    });
});


/* Switch de idioma */

document.addEventListener("DOMContentLoaded", function () {
  var swich_2 = document.getElementById("swich_2");
  var language = "ES"; // Inicialmente configurado en español

  const url = "https://api.jsonbin.io/v3/b/666e2885ad19ca34f8799046";
  swich_2.textContent = language; // Establecer el texto inicial

  swich_2.addEventListener("click", function () {
    // Agregar clase para el efecto de pulsado
    swich_2.classList.add("clicked");

    // Obtener la altura actual del contenedor
    var containerHeight = swich_2.clientHeight;

    // Cambiar la altura del contenedor para iniciar la animación
    swich_2.style.height = containerHeight + "px";

    // Ocultar el texto actual con transición de opacidad
    swich_2.style.opacity = 0;

    // Mostrar mensaje del idioma al que se está traduciendo
    var messageBox = document.getElementById("messageBox");
    var messageText = language === "ES" ? "Traduciendo a inglés..." : "Translating to Spanish...";
    showMessage(messageBox, messageText);

    // Esperar un breve periodo antes de cambiar el contenido
    setTimeout(function () {
      // Cambiar el idioma
      if (language === "ES") {
        language = "EN";
      } else {
        language = "ES";
      }

      // Realizar la solicitud fetch según el nuevo idioma seleccionado
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          // Actualizar el contenido del botón con el nuevo idioma
          swich_2.textContent = language;

          // Esperar un breve periodo antes de mostrar el nuevo texto
          setTimeout(function () {
            // Mostrar el texto con una transición de opacidad
            swich_2.style.opacity = 1;

            // Actualizar otros elementos del DOM con los nuevos datos según el idioma seleccionado
            const datanav = data.record.nav;
            document.getElementById("sobremi_nav").textContent =
              language === "ES" ? datanav.sobremi.spanish : datanav.sobremi.english;
            document.getElementById("proyectos_nav").textContent =
              language === "ES" ? datanav.proyectos.spanish : datanav.proyectos.english;
            document.getElementById("skills_nav").textContent =
              language === "ES" ? datanav.skills.spanish : datanav.skills.english;
            document.getElementById("contactos_nav").textContent =
              language === "ES" ? datanav.contactos.spanish : datanav.contactos.english;

            const datasobremi = data.record.sobremi;
            document.getElementById("subtitulo-sobremi").textContent =
              language === "ES" ? datasobremi.subtitle.spanish : datasobremi.subtitle.english;
            document.getElementById("description").textContent =
              language === "ES" ? datasobremi.description.spanish : datasobremi.description.english;
            document.getElementById("descargarcv").textContent =
              language === "ES" ? datasobremi.buttons.descargarcv.spanish : datasobremi.buttons.descargarcv.english;
            document.getElementById("contactame").textContent =
              language === "ES" ? datasobremi.buttons.contactame.spanish : datasobremi.buttons.contactame.english;
            document.getElementById("estesoyyo").textContent =
              language === "ES" ? datasobremi.estesoyyo.spanish : datasobremi.estesoyyo.english;
            document.getElementById("Miraloultimo").textContent =
              language === "ES" ? datasobremi.Miraloultimo.spanish : datasobremi.Miraloultimo.english;

            const dataproyectos = data.record.proyectos;
            document.getElementById("proyectoscola").textContent =
              language === "ES" ? dataproyectos.proyectoscola.spanish : dataproyectos.proyectoscola.english;
            document.getElementById("proyectosperso").textContent =
              language === "ES" ? dataproyectos.proyectosperso.spanish : dataproyectos.proyectosperso.english;

            const dataskills = data.record.skills;
            document.getElementById("Tecnologías").textContent =
              language === "ES" ? dataskills.programming.spanish : dataskills.programming.english;
            document.getElementById("desing").textContent =
              language === "ES" ? dataskills.desing.spanish : dataskills.desing.english;

            const datasfooter = data.record.footer;
            document.getElementById("frase").textContent =
              language === "ES" ? datasfooter.frase.spanish : datasfooter.frase.english;
            document.getElementById("adicional").textContent =
              language === "ES" ? datasfooter.adicional.spanish : datasfooter.adicional.english;
            document.getElementById("contactamefooter").textContent =
              language === "ES" ? datasfooter.contactame.titulo.spanish : datasfooter.contactame.titulo.english;
            document.getElementById("mensaje").textContent =
              language === "ES" ? datasfooter.contactame.mensaje.spanish : datasfooter.contactame.mensaje.english;

            // Quitar clase de pulsado después de completar la transición
            setTimeout(function () {
              swich_2.classList.remove("clicked");
            }, 100); // Esperar 300ms antes de quitar la clase de pulsado
          }, 100); // Esperar 100ms antes de mostrar el nuevo texto
        });
    }, 100); // Esperar 300ms antes de cambiar el contenido para que se complete la animación de altura

    // Ocultar el mensaje después de un tiempo específico
    setTimeout(function () {
      hideMessage(messageBox);
    }, 650); 
  });
});

function showMessage(element, message) {
  element.textContent = message;
  element.style.display = "block";
}

function hideMessage(element) {
  element.style.display = "none";
}



$(function () {
  // Open
  $("[data-popup-open]").on("click", function (e) {
    var targeted_popup_class = $(this).attr("data-popup-open");
    $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
    e.preventDefault();
  });

  // Close
  $("[data-popup-close]").on("click", function (e) {
    var targeted_popup_class = $(this).attr("data-popup-close");
    $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
    e.preventDefault();
  });
});
