// DOM Elements
const navLinks = document.querySelectorAll('.nav-link');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-links');
const bookNowBtn = document.getElementById('bookNowBtn');
const bookingModal = document.getElementById('bookingModal');
const closeModal = document.querySelector('.close-modal');
const sections = document.querySelectorAll('.section');
const currentYearSpan = document.getElementById('currentYear');

// Smooth scrolling for navigation
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Update active link
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        // Close mobile menu if open
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }

        // Scroll to section
        const targetId = link.getAttribute('href');
        if (targetId !== '#booking') {
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        } else {
            // Handle booking button in nav
            showBookingModal();
        }
    });
});

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        navMenu.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Booking modal functionality
function showBookingModal() {
    bookingModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function hideBookingModal() {
    bookingModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

bookNowBtn.addEventListener('click', showBookingModal);
closeModal.addEventListener('click', hideBookingModal);

// Close modal when clicking outside
bookingModal.addEventListener('click', (e) => {
    if (e.target === bookingModal) {
        hideBookingModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && bookingModal.style.display === 'flex') {
        hideBookingModal();
    }
});

// Animate sections on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// Set current year in footer
currentYearSpan.textContent = new Date().getFullYear();

// Form submission simulation (for future implementation)
document.addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.matches('form')) {
        // Future form submission logic
        alert('Thank you! This feature will be implemented soon.');
    }
});

// Add hover effect to service cards dynamically
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const icon = card.querySelector('.service-icon i');
        icon.style.transform = 'scale(1.2)';
        icon.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseleave', () => {
        const icon = card.querySelector('.service-icon i');
        icon.style.transform = 'scale(1)';
    });
});

// QR code click to enlarge (future enhancement)
const qrContainer = document.querySelector('.qr-container');
qrContainer.addEventListener('click', () => {
    // Future enhancement: Show enlarged QR code
    console.log('QR code clicked - future enhancement: enlarge view');
});

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in animation to header
    const header = document.querySelector('header');
    header.style.opacity = '0';
    header.style.transform = 'translateY(-20px)';
    header.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

    setTimeout(() => {
        header.style.opacity = '1';
        header.style.transform = 'translateY(0)';
    }, 100);

    // Make first section visible immediately
    if (sections.length > 0) {
        sections[0].classList.add('visible');
    }
});