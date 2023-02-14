// DOM Elements
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('nav ul');
const featureSections = document.querySelectorAll('.feature-section');
const ctaButton = document.querySelector('.cta-button');

// Menu Button Toggle
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    navLinks.classList.add('show');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    navLinks.classList.remove('show');
    menuOpen = false;
  }
});

// Feature Sections Animation
const animationOptions = {
  threshold: 0.5
};
const featureSectionsObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    } else {
      entry.target.classList.remove('animate');
    }
  });
}, animationOptions);
featureSections.forEach(section => {
  featureSectionsObserver.observe(section);
});

// CTA Button Click
ctaButton.addEventListener('click', () => {
  alert('Coming Soon!');
});
