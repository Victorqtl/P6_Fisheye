// DOM Elements
const contactBtn = document.querySelector(".contact-btn");
const modal = document.getElementById("contact_modal");
const closeBtn = document.querySelectorAll(".close-btn");
const form = document.querySelector("form");
const validationSubmit = document.querySelector(".validation-submit");
const errorMessage = document.querySelector(".error-submit");
const logo = document.getElementById(".lien-logo")
const main = document.getElementById("main");

// Événements ouverture/fermeture modal
contactBtn.addEventListener("click", openModal);
closeBtn.forEach(btn => btn.addEventListener("click", closeModal));

// Fermeture modal si clic en dehors
document.addEventListener('click', (event) => {
    let clickInsideModal = modal.contains(event.target);
    let clickOnContactBtn = contactBtn.contains(event.target);
    let modalIsVisible = modal.style.display !== 'none';

    if (!clickInsideModal && !clickOnContactBtn && modalIsVisible) {
        closeModal();
    }
});

// Fonctions ouverture/fermeture modal
function openModal() {
	modal.style.display = "block";
    modal.setAttribute("aria-hidden", "false");
    main.setAttribute("aria-hidden", "true");
    logo.setAttribute("aria-hidden", "true");
    logo.tabIndex = -1;
    closeBtn[0].focus();
}

function closeModal() {
    modal.style.display = "none";
    validationSubmit.style.display = "none";
    errorMessage.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
    main.setAttribute("aria-hidden", "false");
    logo.setAttribute("aria-hidden", "false");
    form.reset();
    contactBtn.focus();
}

// Fermeture modal avec touche Echap
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeModal();
    }
});

// Validation formulaire
form.addEventListener("submit", (event) => {
    event.preventDefault();

    let allFieldsFilled = true;
    let formData = {};
    // Vérification des champs
    for (let input of form.querySelectorAll("input, textarea")) {
        if (!input.value.trim()) {
            allFieldsFilled = false;
            break;
        }
        // Stockage des données
        formData[input.name] = input.value;
    }
    // Affichage message de validation
    if (allFieldsFilled) {
        validationSubmit.style.display = "block";
        errorMessage.style.display = "none";
        console.log(formData);
    } else {
       errorMessage.style.display = "block";
    }

});