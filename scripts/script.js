document.addEventListener("DOMContentLoaded", function () {
    // Dark Mode Toggle
    const toggle = document.getElementById("darkModeToggle");
    const icon = document.getElementById("darkModeIcon");
    const html = document.documentElement;

    // Load user's dark mode preference
    if (localStorage.getItem("theme") === "dark") {
        html.classList.add("dark");
        toggle.checked = true;
        icon.classList.replace("fa-moon", "fa-sun");
    }

    // Toggle dark mode on switch click
    toggle.addEventListener("change", () => {
        html.classList.toggle("dark");
        if (html.classList.contains("dark")) {
            icon.classList.replace("fa-moon", "fa-sun");
            localStorage.setItem("theme", "dark");
        } else {
            icon.classList.replace("fa-sun", "fa-moon");
            localStorage.setItem("theme", "light");
        }
    });

    // Testimonial Carousel
    const carousel = document.getElementById("testimonialCarousel");
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    const slides = carousel.children;
    const totalSlides = slides.length;

    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100; // Move by 100% for each slide
        carousel.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1; // Loop back to the last slide
        updateCarousel();
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1; // Loop back to the first slide
        updateCarousel();
    });

    // Auto-rotate carousel every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    }, 5000);

    // Update footer year dynamically
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

