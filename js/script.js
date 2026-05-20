// Mobile menu toggle with improved accessibility
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    }
});

// Smooth scrolling for navigation links with throttling
let isScrolling = false;

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            if (!isScrolling) {
                isScrolling = true;
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                setTimeout(() => {
                    isScrolling = false;
                }, 1000);
            }
            
            // Close mobile menu if open
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
});

// Active navigation highlight on scroll with throttling
const sections = document.querySelectorAll('section');
let scrollTimeout;

window.addEventListener('scroll', () => {
    if (scrollTimeout) return;
    
    scrollTimeout = setTimeout(() => {
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
        
        scrollTimeout = null;
    }, 100);
});

// Modal functionality with improved accessibility
const modal = document.getElementById('booking-modal');
const bookingBtn = document.getElementById('booking-btn');
const closeBtn = document.querySelector('.close');
const formInputs = modal.querySelectorAll('input, select, textarea');
let lastFocusedElement;

// Set minimum date to today
const dateInput = document.getElementById('date');
if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
}

bookingBtn.addEventListener('click', () => {
    lastFocusedElement = document.activeElement;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Focus first input for accessibility
    setTimeout(() => {
        const firstInput = modal.querySelector('input');
        if (firstInput) firstInput.focus();
    }, 100);
});

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
        closeModal();
    }
});

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
    if (lastFocusedElement) {
        lastFocusedElement.focus();
    }
}

// Form validation and submission
const bookingForm = document.getElementById('booking-form');
const submitBtn = document.getElementById('submit-btn');
const notification = document.getElementById('notification');

bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Validate form
    const errors = validateForm();
    
    if (errors.length > 0) {
        showNotification(errors[0], 'error');
        return;
    }
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.classList.add('loading');
    submitBtn.textContent = 'Submitting...';
    
    // Simulate API call
    setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.classList.remove('loading');
        submitBtn.textContent = 'Submit Request';
        
        showNotification('Thank you! Your appointment request has been submitted. We will contact you shortly to confirm.', 'success');
        bookingForm.reset();
        closeModal();
    }, 1500);
});

function validateForm() {
    const errors = [];
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const service = document.getElementById('service');
    const date = document.getElementById('date');
    
    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    document.querySelectorAll('.form-group input, .form-group select').forEach(el => el.classList.remove('error'));
    
    // Validate name
    if (!name.value.trim()) {
        showError('name', 'Name is required');
        errors.push('Name is required');
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
        showError('email', 'Email is required');
        errors.push('Email is required');
    } else if (!emailRegex.test(email.value)) {
        showError('email', 'Please enter a valid email address');
        errors.push('Invalid email format');
    }
    
    // Validate phone (optional but must be valid if provided)
    if (phone.value && !/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(phone.value)) {
        showError('phone', 'Phone format should be 123-456-7890');
        errors.push('Invalid phone format');
    }
    
    // Validate service
    if (!service.value) {
        showError('service', 'Please select a service');
        errors.push('Service is required');
    }
    
    // Validate date
    if (!date.value) {
        showError('date', 'Please select a date');
        errors.push('Date is required');
    } else {
        const selectedDate = new Date(date.value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selectedDate < today) {
            showError('date', 'Please select a future date');
            errors.push('Cannot select past date');
        }
    }
    
    return errors;
}

function showError(fieldId, message) {
    const input = document.getElementById(fieldId);
    const errorSpan = document.getElementById(`${fieldId}-error`);
    
    if (input) input.classList.add('error');
    if (errorSpan) errorSpan.textContent = message;
}

function showNotification(message, type = 'info') {
    notification.textContent = message;
    notification.className = `notification ${type} show`;
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 5000);
}

// Scroll animations with Intersection Observer
const fadeElements = document.querySelectorAll('.fade-in-section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(el => observer.observe(el));

// FAQ Accordion functionality
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isExpanded = question.getAttribute('aria-expanded') === 'true';
        
        // Close all other FAQs
        faqQuestions.forEach(q => {
            q.setAttribute('aria-expanded', 'false');
            q.parentElement.classList.remove('active');
        });
        
        // Toggle current FAQ
        if (!isExpanded) {
            question.setAttribute('aria-expanded', 'true');
            faqItem.classList.add('active');
        }
    });
});

// Lazy loading for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});
