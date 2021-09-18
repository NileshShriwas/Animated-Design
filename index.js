const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slideNumber = 0;


// Image Slider next Button
nextBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    });

    slideNumber++;

    if (slideNumber > (numberOfSlides - 1)){
        slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});

// Image Slidee Prev Button
prevBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    });

    slideNumber--;

    if (slideNumber < 0){
        slideNumber = numberOfSlides - 1;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});

// Image Slider AutoPlay
var playSlider;

var repeater = () => {
    playSlider = setInterval(function() {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
    
        slideIcons.forEach((slideIcon) => {
            slideIcon.classList.remove("active");
        });
    
        slideNumber++;
    
        if (slideNumber > (numberOfSlides - 1)){
            slideNumber = 0;
        }
    
        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
    }, 3000);
}
repeater();

// Stop the image slider AutoPlay on Mouseover
slider.addEventListener("mouseover", () => {
    clearInterval(playSlider);
});

// Start the image slider AutoPlay again on Mouseover
slider.addEventListener("mouseover", () => {
    repeater();
});

// Section 3
function createBurst(){
    let animContainer = document.querySelector(".animation-container");
    let burst = document.querySelector(".brust");
    let lines = document.querySelectorAll(".line");

    burst.style.top = Math.random() * innerHeight + "px";
    burst.style.left = Math.random() * innerWidth + "px";

    lines.forEach((line) => {
        const colors = ["#ea4335", "#34a853", "#4285f4", "#fbbc05", "#dc18b9", "#ff5a00", "#8621f8", "#ffff1b"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        line.style.background = randomColor;
    });

    let burstClone = burst.cloneNode(true);
    animContainer.appendChild(burstClone);

    setTimeout(() => {
        burstClone.remove();
    }, 8000);
}

setInterval(createBurst, 200);
