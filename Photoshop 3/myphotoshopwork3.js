const slider = document.querySelector(".image-comparsion .slider");
const Beforepic = document.querySelector(".image-comparsion .Before-pic");
const sliderLine = document.querySelector(".image-comparsion .slider-line");
const sliderIcon = document.querySelector(".image-comparsion .slider-icon");
slider.addEventListener("input", (e) => {
    let sliderValue = e.target.value + "%";

    Beforepic.style.width = sliderValue;
    sliderLine.style.left = sliderValue;
    sliderIcon.style.left = sliderValue;
});