// Smooth Scroll Effect for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Form Validation
const form = document.querySelector('.contact-form');
form.addEventListener('submit', function(e) {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (name === '' || email === '' || message === '') {
        alert('All fields are required!');
        e.preventDefault();
    } else if (!emailPattern.test(email)) {
        alert('Please enter a valid email address!');
        e.preventDefault();
    } else {
        alert('Thank you for your message!');
    }
});

// Dynamic Hover Effect for Skill Images
const skillImages = document.querySelectorAll('.logo');
skillImages.forEach(image => {
    image.addEventListener('mouseenter', function() {
        image.style.transform = 'scale(1.1)';
        image.style.transition = '0.3s ease';
    });
    
    image.addEventListener('mouseleave', function() {
        image.style.transform = 'scale(1)';
    });
});

// Scroll Animations for Section Appearance
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight;

    sections.forEach(section => {
        if (section.offsetTop < scrollPosition - 100) {
            section.classList.add('visible');
        }
    });
});

// Ensure the page looks attractive on small screens
window.addEventListener('resize', function() {
    const screenWidth = window.innerWidth;
    const navLinks = document.querySelectorAll('nav a');
    if (screenWidth < 768) {
        navLinks.forEach(link => {
            link.style.fontSize = '14px'; // Smaller font size for mobile
        });
    } else {
        navLinks.forEach(link => {
            link.style.fontSize = '18px'; // Default font size for larger screens
        });
    }
});
