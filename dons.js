document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("donation-form");
    const formContainer = document.getElementById("donation-form-container");
    const imageContainer = document.getElementById("image-container");
    const notification = document.getElementById("notification");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); 
        formContainer.style.display = "none";
        notification.style.display = "block";
        imageContainer.innerHTML = `
             <img src="https://img.freepik.com/free-photo/close-up-team-hand-shake_23-2148905520.jpg?t=st=1736871790~exp=1736875390~hmac=d6286dd1eaa9f38ca445c570123b6434ef8ced6360acf88d15f68ece9919707c&w=996" alt="Image d'un enfant souriant">
        `;
        
        setTimeout(() => {
            notification.style.display = "none";
        }, 5000);
    });
});

// Sélectionne le bouton "menu-toggle" et la liste du menu
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.navbar nav ul');

// Ajoute un événement au clic sur le bouton hamburger
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Ajoute ou retire la classe "active" pour afficher/masquer le menu
});

