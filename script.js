// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Image Gallery Effects
const galleryImages = document.querySelectorAll('.gallery img');
const modal = document.getElementById('myModal');
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");

galleryImages.forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

const closeModal = document.getElementsByClassName("close")[0];
closeModal.onclick = function() {
    modal.style.display = "none";
}

// Contact Form Validation
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    const name = contactForm.querySelector('input[name="name"]');
    const email = contactForm.querySelector('input[name="email"]');
    const message = contactForm.querySelector('textarea[name="message"]');

    if (name.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
        alert('Please fill in all fields.');
        e.preventDefault();
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value)) {
        alert('Please enter a valid email address.');
        e.preventDefault();
    }
});