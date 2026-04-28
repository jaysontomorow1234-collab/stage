document.addEventListener("DOMContentLoaded", function() {
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Reveal animation on scroll
    window.addEventListener("scroll", reveal);

    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
        }
    }

// Voer reveal ook één keer uit bij het laden van de pagina
reveal();
});