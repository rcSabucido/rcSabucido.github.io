const heroButton = document.querySelector('.hero-button');
const exploreElement = document.querySelector('#project-title');
const currentYear = new Date().getFullYear();
const footer = document.querySelector('.footer-text');

footer.textContent = `Copyright © ${currentYear} by Ryz Clyd Sabucido`;

heroButton.addEventListener('click', () => {
    exploreElement.scrollIntoView({ behavior: 'smooth' });
});