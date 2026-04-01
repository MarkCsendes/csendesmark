// Legördülő menü kezelése
function toggleDropdown(id) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
        if (dropdowns[i].id !== id) dropdowns[i].classList.remove('show');
    }
    document.getElementById(id).classList.toggle("show");
}

// Bezárás ha máshova kattintasz
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) dropdowns[i].classList.remove('show');
    }
}

// Galéria léptetés
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Automata lapozás (5 mp)
setInterval(() => changeSlide(1), 5000);