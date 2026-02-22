// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1); // remove #
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70, // offset for fixed navbar
                behavior: 'smooth'
            });
            // Close mobile menu if open
            navMenu.classList.remove('active');
        }
    });
});

// Active navigation highlight on scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Modal functionality
const modal = document.getElementById('booking-modal');
const bookingBtn = document.getElementById('booking-btn');
const closeBtn = document.querySelector('.close');

bookingBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Form submission simulation
const bookingForm = document.getElementById('booking-form');
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! This is a simulation. No appointment was booked.');
    modal.style.display = 'none';
});

// Scroll animations with Intersection Observer
const fadeElements = document.querySelectorAll('.fade-in-section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

fadeElements.forEach(el => observer.observe(el));
