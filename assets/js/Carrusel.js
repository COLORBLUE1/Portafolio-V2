const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next-arrow");
const backBtn = document.querySelector(".back-arrow");
const root = document.querySelector(":root");

let currentSlide = 1;
const switchSlideDuration = 1000;
root.style.setProperty("--duration", `${switchSlideDuration}ms`);

const handleBack = () => {
    makeSlideChanges((currentSlide - 1 + slides.length) % slides.length);
};

const handleNext = () => {
    makeSlideChanges((currentSlide + 1) % slides.length);
};

const makeSlideChanges = (newSlide) => {
    slides[currentSlide].classList.replace("showcase", "right");
    slides[newSlide].classList.replace("left", "showcase");

    backBtn.removeEventListener("click", handleBack);
    nextBtn.removeEventListener("click", handleNext);

    setTimeout(
        (slide, backBtn, nextBtn) => {
            slide.classList.replace("right", "left");

            backBtn.addEventListener("click", handleBack);
            nextBtn.addEventListener("click", handleNext);
        },
        switchSlideDuration,
        slides[currentSlide],
        backBtn,
        nextBtn
    );

    currentSlide = newSlide;

    console.log(`${currentSlide + 1} / ${slides.length}`);
};

backBtn.addEventListener("click", handleBack);
nextBtn.addEventListener("click", handleNext);
