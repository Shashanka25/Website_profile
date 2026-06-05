// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Change icon between bars and times
    const icon = hamburger.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// --- Custom Cursor ---
const cursorDot = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]');

window.addEventListener('mousemove', function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Add a slight delay for the outline using animate for a smoother trailing effect
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// --- Typing Effect ---
const textArray = ["Web Designer", "AI Enthusiast", "Frontend Developer", "Problem Solver"];
let textIndex = 0;
let charIndex = 0;
const typingTextElement = document.querySelector('.typing-text');
let isDeleting = false;

function type() {
    const currentText = textArray[textIndex];
    
    if (isDeleting) {
        typingTextElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingTextElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = 100;
    
    if (isDeleting) {
        typeSpeed /= 2;
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
        typeSpeed = 500; // Pause before start
    }

    setTimeout(type, typeSpeed);
}

// Start typing effect
if(typingTextElement) {
    setTimeout(type, 1000);
}


// --- ScrollReveal Animations ---
ScrollReveal({
    reset: false,
    distance: '60px',
    duration: 1500,
    delay: 200
});

ScrollReveal().reveal('.hero-content .greeting, .section-header', { delay: 100, origin: 'left' });
ScrollReveal().reveal('.hero-content .name, .hero-content .title', { delay: 200, origin: 'bottom' });
ScrollReveal().reveal('.hero-content .cta-buttons', { delay: 300, origin: 'bottom' });
ScrollReveal().reveal('.hero-image', { delay: 400, origin: 'right' });

ScrollReveal().reveal('.about-content p, .contact-content', { delay: 200, origin: 'bottom' });
ScrollReveal().reveal('.skill-card, .project-card, .timeline-item', { delay: 200, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.contact-form-container', { delay: 300, origin: 'right' });

// --- Project Modal Logic ---
const modal = document.getElementById('project-modal');
const closeBtn = document.querySelector('.close-modal');
const modalTitle = document.getElementById('modal-title');
const modalImg = document.getElementById('modal-img');
const modalDesc = document.getElementById('modal-desc');
const projectBtns = document.querySelectorAll('.project-btn');

projectBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Get data from button
        const title = btn.getAttribute('data-title');
        const image = btn.getAttribute('data-image');
        const desc = btn.getAttribute('data-description');
        
        // Populate modal
        modalTitle.textContent = title;
        modalImg.src = image;
        modalDesc.innerHTML = desc;
        
        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
});

// Close modal when clicking close button
closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside content
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// --- Typed.js Initialization ---
if (document.getElementById('typed-text')) {
    new Typed('#typed-text', {
        strings: ['Tech Enthusiast', 'Software Developer', 'Continuous Learner', 'Problem Solver'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true
    });
}

// --- Vanilla Tilt Initialization ---
if (typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll(".skill-card, .project-card, .timeline-content"), {
        max: 8,
        speed: 400,
        glare: true,
        "max-glare": 0.15,
    });
}
