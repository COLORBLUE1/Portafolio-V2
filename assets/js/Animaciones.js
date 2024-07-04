document.addEventListener("DOMContentLoaded", function () {
  // Navbar scroll effect
  const navbar = document.getElementById("sections");

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 80) {
      navbar.style.backgroundColor = "rgba(255, 255, 255, 0.59)";
      navbar.style.backdropFilter = "blur(5px)";
    } else {
      navbar.style.backgroundColor = "transparent";
      navbar.style.backdropFilter = "blur(0px)";
    }
    navbar.style.transition = "background-color 0.5s linear, backdrop-filter 0.5s linear";
  });

  // Mobile menu toggle
  const menuBtn = document.querySelector(".menu-btn");
  const menu = document.querySelector(".menu");
  menuBtn.addEventListener("click", function () {
    menuBtn.classList.toggle("open");
    menu.classList.toggle("open");
  });

  // Dark mode switch
  const body = document.querySelector("body");
  const swich = document.querySelector(".swich");
  const icon_swich = document.querySelector(".swich img");

  function isDarkModePreferred() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function toggleDarkMode() {
    if (body.classList.contains("dark")) {
      body.classList.remove("dark");
      icon_swich.src = "assets/Recursos-img/icons/sun.svg";
      swich.style.backgroundColor = "#424242";
      localStorage.setItem("theme", "light");
    } else {
      body.classList.add("dark");
      icon_swich.src = "assets/Recursos-img/icons/moon_empy.svg";
      swich.style.backgroundColor = "white";
      localStorage.setItem("theme", "dark");
    }
    body.style.transition = "background-color 1s ease";
  }

  swich.addEventListener("click", toggleDarkMode);

  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark" || (storedTheme === null && isDarkModePreferred())) {
    body.classList.add("dark");
    icon_swich.src = "assets/Recursos-img/icons/moon_empy.svg";
    swich.style.backgroundColor = "white";
  } else {
    body.classList.remove("dark");
    icon_swich.src = "assets/Recursos-img/icons/sun.svg";
    swich.style.backgroundColor = "#424242";
  }

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    const newColorScheme = e.matches ? "dark" : "light";
    body.classList.remove("dark", "light");
    body.classList.add(newColorScheme);
    icon_swich.src = newColorScheme === "dark"
      ? "assets/Recursos-img/icons/moon_empy.svg"
      : "assets/Recursos-img/icons/sun.svg";
    swich.style.backgroundColor = newColorScheme === "dark" ? "white" : "#424242";
    localStorage.setItem("theme", newColorScheme);
  });

  // Language switch
  const swich_2 = document.getElementById("swich_2");
  let language = "ES";
  const url = "https://api.jsonbin.io/v3/b/666e2885ad19ca34f8799046";

  swich_2.textContent = language;

  swich_2.addEventListener("click", function () {
    swich_2.classList.add("clicked");
    const containerHeight = swich_2.clientHeight;
    swich_2.style.height = containerHeight + "px";
    swich_2.style.opacity = 0;

    const messageBox = document.getElementById("messageBox");
    const messageText = language === "ES" ? "Traduciendo a inglés..." : "Translating to Spanish...";
    showMessage(messageBox, messageText);

    setTimeout(function () {
      language = language === "ES" ? "EN" : "ES";
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          swich_2.textContent = language;
          setTimeout(function () {
            swich_2.style.opacity = 1;

            const datanav = data.record.nav;
            document.getElementById("sobremi_nav").textContent = language === "ES"
              ? datanav.sobremi.spanish
              : datanav.sobremi.english;
            document.getElementById("proyectos_nav").textContent = language === "ES"
              ? datanav.proyectos.spanish
              : datanav.proyectos.english;
            document.getElementById("skills_nav").textContent = language === "ES"
              ? datanav.skills.spanish
              : datanav.skills.english;
            document.getElementById("contactos_nav").textContent = language === "ES"
              ? datanav.contactos.spanish
              : datanav.contactos.english;

            const datasobremi = data.record.sobremi;
            document.getElementById("subtitulo-sobremi").textContent = language === "ES"
              ? datasobremi.subtitle.spanish
              : datasobremi.subtitle.english;
            document.getElementById("description").textContent = language === "ES"
              ? datasobremi.description.spanish
              : datasobremi.description.english;
            document.getElementById("descargarcv").textContent = language === "ES"
              ? datasobremi.buttons.descargarcv.spanish
              : datasobremi.buttons.descargarcv.english;
            document.getElementById("contactame").textContent = language === "ES"
              ? datasobremi.buttons.contactame.spanish
              : datasobremi.buttons.contactame.english;
            document.getElementById("estesoyyo").textContent = language === "ES"
              ? datasobremi.estesoyyo.spanish
              : datasobremi.estesoyyo.english;
            document.getElementById("Miraloultimo").textContent = language === "ES"
              ? datasobremi.Miraloultimo.spanish
              : datasobremi.Miraloultimo.english;

            const dataproyectos = data.record.proyectos;
            document.getElementById("proyectoscola").textContent = language === "ES"
              ? dataproyectos.proyectoscola.spanish
              : dataproyectos.proyectoscola.english;
            document.getElementById("proyectosperso").textContent = language === "ES"
              ? dataproyectos.proyectosperso.spanish
              : dataproyectos.proyectosperso.english;

            const dataskills = data.record.skills;
            document.getElementById("Tecnologías").textContent = language === "ES"
              ? dataskills.programming.spanish
              : dataskills.programming.english;
            document.getElementById("desing").textContent = language === "ES"
              ? dataskills.desing.spanish
              : dataskills.desing.english;

            const datasfooter = data.record.footer;
            document.getElementById("frase").textContent = language === "ES"
              ? datasfooter.frase.spanish
              : datasfooter.frase.english;
            document.getElementById("adicional").textContent = language === "ES"
              ? datasfooter.adicional.spanish
              : datasfooter.adicional.english;
            document.getElementById("contactamefooter").textContent = language === "ES"
              ? datasfooter.contactame.titulo.spanish
              : datasfooter.contactame.titulo.english;
            document.getElementById("mensaje").textContent = language === "ES"
              ? datasfooter.contactame.mensaje.spanish
              : datasfooter.contactame.mensaje.english;

            setTimeout(function () {
              swich_2.classList.remove("clicked");
            }, 100);
          }, 100);
        });
    }, 100);

    setTimeout(function () {
      hideMessage(messageBox);
    }, 650);
  });

  function showMessage(element, message) {
    element.textContent = message;
    element.style.display = "block";
  }

  function hideMessage(element) {
    element.style.display = "none";
  }

  // Hover effect for 'lenguajes' items
  const lenguajes = document.querySelector(".lenguajes");
  const lenguajesItems = document.querySelector(".lenguajes_items");
  let timeoutIdLenguajes;

  lenguajes.addEventListener("mouseenter", () => {
    clearTimeout(timeoutIdLenguajes);
    lenguajesItems.style.right = "30%";
    lenguajesItems.style.transition = "right 0.3s ease";
  });

  lenguajes.addEventListener("mouseleave", () => {
    timeoutIdLenguajes = setTimeout(() => {
      lenguajesItems.style.right = "0px";
    }, 200);
    lenguajesItems.style.transition = "right 0.3s ease";
  });

  // Initialize position on page load
  setTimeout(() => {
    lenguajesItems.style.right = "0px";
  }, 300);

  // Hover effect for 'desing' items
  const desing = document.querySelector(".desing");
  const desingItems = document.querySelector(".desing_items");
  let timeoutIdDesing;

  desing.addEventListener("mouseenter", () => {
    clearTimeout(timeoutIdDesing);
    desingItems.style.left = "50%";
    desingItems.style.transition = "left 0.5s ease";
  });

  desing.addEventListener("mouseleave", () => {
    timeoutIdDesing = setTimeout(() => {
      desingItems.style.left = "0px";
    }, 200);
    desingItems.style.transition = "left 0.5s ease";
  });

  // Initialize position on page load
  setTimeout(() => {
    desingItems.style.left = "0px";
  }, 300);
});
