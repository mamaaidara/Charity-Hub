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

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.navbar nav ul');


menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active'); 
});


document.getElementById('donation-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const amount = document.getElementById('amount').value;
  
    if (name && email && amount) {
      alert(Merci, ${name} ! Votre don de ${amount} a été reçu.);
      document.getElementById('donation-form').reset();
    } else {
      alert('Veuillez remplir tous les champs obligatoires.');
    }
  });