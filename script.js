function toggleMenu() {
    const links = document.querySelector('.links');
    links.classList.toggle('active');
}

document.querySelectorAll('.links .link').forEach(link => {
    link.addEventListener('click', () => {
        const linksMenu = document.querySelector('.links');
        if (linksMenu.classList.contains('active')) {
            linksMenu.classList.remove('active');
        }
    });
});

const typewriterText = document.querySelector('.typewriter-text');
const words = ["Developer/Editor", "Tech Enthusiast", "Problem Solver"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typewriterText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 1500; 
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; 
        typeSpeed = 500; 
    }

    setTimeout(type, typeSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
    if (typewriterText) {
        setTimeout(type, 1000);
    }
});