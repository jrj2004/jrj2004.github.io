const slider = document.querySelector(".image-comparsion .slider");
const Blackandwhitepic = document.querySelector(".image-comparsion .Black-and-white-pic");
const sliderLine = document.querySelector(".image-comparsion .slider-line");
const sliderIcon = document.querySelector(".image-comparsion .slider-icon");
slider.addEventListener("input", (e) => {
    let sliderValue = e.target.value + "%";

    Blackandwhitepic.style.width = sliderValue;
    sliderLine.style.left = sliderValue;
    sliderIcon.style.left = sliderValue;
});