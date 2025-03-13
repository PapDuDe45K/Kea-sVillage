// Theme Switcher
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
});

// Navbar Animation on Scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Typewriter Effect
const typewriter = document.querySelector('.typewriter');
const words = ["Welcome to Plug~Man", "Find Your Plug Today!", "Student Life Made Easy!"];
let i = 0, j = 0, currentWord = [], isDeleting = false;

function typeEffect() {
    typewriter.innerHTML = currentWord.join('');

    if (i < words.length) {
        if (!isDeleting && j <= words[i].length) {
            currentWord.push(words[i][j]);
            j++;
        }

        if (isDeleting && j > 0) {
            currentWord.pop();
            j--;
        }

        if (j == words[i].length) {
            isDeleting = true;
        }

        if (isDeleting && j === 0) {
            currentWord = [];
            isDeleting = false;
            i++;
            if (i === words.length) {
                i = 0;
            }
        }
    }
    setTimeout(typeEffect, isDeleting ? 50 : 150);
}
typeEffect();
