const toggle = document.querySelector('.menu input');
const nav = document.querySelector('nav');
const navLinksContainer = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

toggle.addEventListener('click', function(){
    navLinksContainer.classList.toggle('active');
});

// Close mobile menu when clicking a link
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinksContainer.classList.remove('active');
        toggle.checked = false; // Uncheck the checkbox
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
});

// Scroll Animations using Intersection Observer
const fadeElements = document.querySelectorAll('.fade-in-section');

const appearOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Unobserve to prevent any flickering once the animation has played
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

fadeElements.forEach(el => {
    appearOnScroll.observe(el);
});

// Set current year dynamically in footer
document.getElementById('current-year').textContent = new Date().getFullYear();