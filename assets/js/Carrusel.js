const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next-arrow");
const backBtn = document.querySelector(".back-arrow");
const root = document.querySelector(":root");

let currentSlide = 0; // Empezamos desde la primera imagen (índice 0)
const switchSlideDuration = 1000;
root.style.setProperty("--duration", `${switchSlideDuration}ms`);

// Función para manejar el cambio a la imagen anterior
const handleBack = () => {
    clearInterval(slideInterval); // Limpiar el intervalo al interactuar
    const newSlide = (currentSlide - 1 + slides.length) % slides.length;
    makeSlideChanges(newSlide);
    slideInterval = setInterval(handleNext, 3000); // Reiniciar intervalo después de la interacción
};

// Función para manejar el cambio a la siguiente imagen
const handleNext = () => {
    clearInterval(slideInterval); // Limpiar el intervalo al interactuar
    const newSlide = (currentSlide + 1) % slides.length;
    makeSlideChanges(newSlide);
    slideInterval = setInterval(handleNext, 3000); // Reiniciar intervalo después de la interacción
};

// Función para realizar los cambios en la imagen
const makeSlideChanges = (newSlide) => {
    slides[currentSlide].classList.remove("showcase");
    slides[newSlide].classList.add("showcase");

    currentSlide = newSlide;

    console.log(`${currentSlide + 1} / ${slides.length}`);
};

// Agregar event listeners para los botones de navegación
backBtn.addEventListener("click", handleBack);
nextBtn.addEventListener("click", handleNext);

// Intervalo para cambiar automáticamente las imágenes
let slideInterval = setInterval(handleNext, 3000); // Cambiar imágenes cada 3 segundos (ajustar según sea necesario)
