

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
    alert(`Merci, ${name} ! Votre don de ${amount} a été reçu.`);
    document.getElementById('donation-form').reset();
  } else {
    alert('Veuillez remplir tous les champs obligatoires.');
  }
});