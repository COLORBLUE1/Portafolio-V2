const navItems = document.querySelectorAll("#proyectos-id li");
const programacionSection = document.getElementById("programacion");
const diseñoSection = document.getElementById("diseño");
const activeElement = document.getElementById("active");

if (activeElement) {
  activeElement.style.width = "100px";
  activeElement.style.height = "20px";
  activeElement.style.borderRadius = "20px";
  activeElement.style.backgroundColor = "rgb(255 255 255)";
  activeElement.style.border = "1px solid rgb(255 255 255 / 47%)";
  activeElement.style.boxShadow = "3px 1px 17px -6px rgb(0 0 0 / 69%)";
  activeElement.style.padding = "8px";
  activeElement.style.textAlign = "center";
}

navItems.forEach((navItem) => {
  navItem.addEventListener("click", (event) => {
    const activeSectionId = event.target.getAttribute("value");
    if (!activeSectionId) return;

    if (programacionSection) programacionSection.style.display = "none";
    if (diseñoSection) diseñoSection.style.display = "none";

    if (activeSectionId === "1" && programacionSection) {
      programacionSection.style.display = "block";
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (activeSectionId === "2" && diseñoSection) {
      diseñoSection.style.display = "block";
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    navItems.forEach((item) => {
      item.style.backgroundColor = "";
      item.style.transition = "all 1s cubic-bezier(0.91, -0.12, 0.31, 0.94) 0s";
    });

    event.target.style.transition = "all 1s cubic-bezier(0.91, -0.12, 0.31, 0.94) 0s";
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

const fechaSpan = document.getElementById("año");

function actualizarFecha() {
  if (!fechaSpan) return;
  fechaSpan.textContent = new Date().getFullYear();
}

actualizarFecha();
setInterval(actualizarFecha, 31536000000);

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const popupTrigger = document.querySelector('.menu-items li[data-popup-open="popup-1"]');
const popup = document.getElementById("popup-1");

if (menuBtn && menu) {
  menuBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    menu.classList.toggle("open");
    menuBtn.classList.toggle("open");
  });

  document.addEventListener("click", function (event) {
    if (!menu.contains(event.target) && event.target !== popupTrigger) {
      menu.classList.remove("open");
      menuBtn.classList.remove("open");
    }
  });
}

if (popupTrigger && popup) {
  popupTrigger.addEventListener("click", function (event) {
    event.stopPropagation();
    popup.style.display = "block";
    menu.classList.remove("open");
    menuBtn.classList.remove("open");
  });

  document.addEventListener("click", function (event) {
    if (event.target !== popupTrigger && event.target !== popup) {
      popup.style.display = "none";
    }
  });
}
