let typed = new Typed("#auto-typed", {
  strings: ["<strong>World</strong>", "<strong>I'm Joule</strong>"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
  loopCount: Infinity,
});

const themeToggleButton = document.getElementById('theme-toggle-button');
const bodyElement = document.body;
const iconElement = themeToggleButton.querySelector('i');
const socialLinksContainer = document.getElementById('social-links');
const jumbotronElement = document.querySelector('.jumbotron');
const h1Element = document.getElementById('h1');
const leadElement = document.querySelector('.lead');

function applyTheme(theme) {
  if (theme === 'light') {
    bodyElement.classList.remove('dark-theme', 'bg-dark'); 
    bodyElement.classList.add('light-theme');
    iconElement.classList.remove('fa-sun');
    iconElement.classList.add('fa-moon');
    themeToggleButton.classList.remove('btn-outline-light');
    themeToggleButton.classList.add('btn-outline-dark');

    
    jumbotronElement.classList.remove('text-white');
    socialLinksContainer.querySelectorAll('a').forEach(link => {
        link.classList.remove('text-white');
    });

  } else { // Dark theme
    bodyElement.classList.remove('light-theme');
    bodyElement.classList.add('dark-theme', 'bg-dark');
    iconElement.classList.remove('fa-moon');
    iconElement.classList.add('fa-sun');
    themeToggleButton.classList.remove('btn-outline-dark');
    themeToggleButton.classList.add('btn-outline-light');

    jumbotronElement.classList.add('text-white');
     socialLinksContainer.querySelectorAll('a').forEach(link => {
        link.classList.add('text-white');
    });
  }
}

let currentTheme = localStorage.getItem('theme') || 'dark';
applyTheme(currentTheme);

themeToggleButton.addEventListener('click', () => {
  if (bodyElement.classList.contains('light-theme')) {
    currentTheme = 'dark';
  } else {
    currentTheme = 'light';
  }
  localStorage.setItem('theme', currentTheme); 
  applyTheme(currentTheme);
});