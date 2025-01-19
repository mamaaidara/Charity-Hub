// Sélectionne le bouton "menu-toggle" et la liste du menu
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.navbar nav ul');

// Ajoute un événement au clic sur le bouton hamburger
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Ajoute ou retire la classe "active" pour afficher/masquer le menu
});
