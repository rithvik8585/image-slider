let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const slider = document.querySelector(".slider");
const dotsContainer = document.querySelector(".dots-container");

// Create navigation dots dynamically
for (let i = 0; i < totalSlides; i++) {
    let dot = document.createElement("span");
    dot.classList.add("dot");
    dot.setAttribute("onclick", `goToSlide(${i})`);
    dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll(".dot");
dots[currentIndex].classList.add("active");

function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const newTransform = `translateX(-${currentIndex * 100}%)`;
    slider.style.transform = newTransform;

    // Update active dot
    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
}

// Auto-slide every 3 seconds
let autoSlide = setInterval(() => {
    showSlide(currentIndex + 1);
}, 3000);

// Reset timer when user interacts
function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
        showSlide(currentIndex + 1);
    }, 3000);
}

// Manual Controls
function nextSlide() {
    showSlide(currentIndex + 1);
    resetAutoSlide();
}

function prevSlide() {
    showSlide(currentIndex - 1);
    resetAutoSlide();
}

function goToSlide(index) {
    showSlide(index);
    resetAutoSlide();
}
