const heroButton = document.querySelector('.hero-button');
const exploreElement = document.querySelector('#project-title');

heroButton.addEventListener('click', () => {
    exploreElement.scrollIntoView({ behavior: 'smooth' });
});