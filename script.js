// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

document.addEventListener('click', (e) => {
  if (e.target === hamburger || hamburger.contains(e.target)) {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', navLinks.classList.contains('open'));
  } else if (!navLinks.contains(e.target)) {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }
});

// Scroll-to-top button
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
});
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Typewriter effect
const typewriter = document.getElementById('typewriter');
const typeText = 'Creative Developer & Designer';
let typeIndex = 0;
function typeWriterEffect() {
  if (typewriter) {
    if (typeIndex <= typeText.length) {
      typewriter.textContent = typeText.slice(0, typeIndex);
      typeIndex++;
      setTimeout(typeWriterEffect, 70);
    }
  }
}
window.addEventListener('DOMContentLoaded', () => {
  typewriter.textContent = '';
  setTimeout(typeWriterEffect, 600);
});

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
function revealOnScroll() {
  const trigger = window.innerHeight * 0.92;
  revealEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < trigger) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Contact form validation
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitBtn = document.getElementById('submitBtn');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function validateForm() {
  let valid = true;
  if (!nameInput.value.trim()) {
    nameError.textContent = 'Name is required.';
    valid = false;
  } else {
    nameError.textContent = '';
  }
  if (!emailInput.value.trim()) {
    emailError.textContent = 'Email is required.';
    valid = false;
  } else if (!validateEmail(emailInput.value.trim())) {
    emailError.textContent = 'Enter a valid email.';
    valid = false;
  } else {
    emailError.textContent = '';
  }
  if (!messageInput.value.trim()) {
    messageError.textContent = 'Message is required.';
    valid = false;
  } else {
    messageError.textContent = '';
  }
  submitBtn.disabled = !valid;
}
[nameInput, emailInput, messageInput].forEach(input => {
  input.addEventListener('input', validateForm);
});
contactForm.addEventListener('submit', e => {
  e.preventDefault();
  validateForm();
  // No actual submission
}); 