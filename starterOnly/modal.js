function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalValid = document.querySelector(".modal-valid");
const modalBody = document.querySelector(".modal-body");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelectorAll(".close");
const formInput = document.querySelectorAll(".formData input");
const formData = document.querySelectorAll(".formData");
const submitForm = document.querySelector(".btn-submit");
const submitFinal = document.querySelector(".close-valid");
const townRadio = document.querySelectorAll(".location_form [name=\"location\"]");

// Regex values
const regTourney = /^\d+$/;
const regBirth = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
const regMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Messages d'erreur
const error1 = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
const error2 = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
const error3 = "Veuillez entrer une adresse mail valide.";
const error4 = "Veuillez choisir une adresse date.";
const error5 = "Veuillez entrer un nombre valide.";
const error6 = "Veuillez choisir une ville.";
const error7 = "Veuillez acceptez les termes et conditions.";

// Les états des erreurs
let errorState = [false, false, false, false, false, false, false]

// Event de lancement de la modal 
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Event de fermeture de la modal 
modalClose.forEach((btn) => btn.addEventListener("click", closeModal));

// Event de validation du formulaire
submitForm.addEventListener("click", validateForm);

// Event de fermeture de la modal après validation
submitFinal.addEventListener("click", closeModal);

// Event pour quand on quitte chaque champ
document.getElementById("first").addEventListener("blur", nameValid);
document.getElementById("last").addEventListener("blur", surnameValid);
document.getElementById("email").addEventListener("blur", emailValid);
document.getElementById("birthdate").addEventListener("blur", birthValid);
document.getElementById("quantity").addEventListener("blur", tourneyValid);
document.getElementById("checkbox1").addEventListener("change", generalValid);

// Lancer la modal de formulaire
function launchModal() {
    modalbg.style.display = "block";
}

// Fermer la modal de formulaire
function closeModal() {
    resetData();
    modalbg.style.display = "none";
    modalBody.style.display = "block";
    modalValid.style.display = "none";
}

// Validate form
function validateForm(x) {
    x.preventDefault();
    checkFields();
}

// Empèche l'envoi du formulaire si les conditions ne sont pas bonnes
function checkFields() {

    // On récupère la présence d'une donnée pour chaque champs dans une array
    let inputList = [];
    inputList.push(formInput[0].value.length, formInput[1].value.length, formInput[2].value.length, formInput[3].value.length, formInput[4].value.length, formInput[1]);

    // On récupère les resultats de chaque champ dans une array
    let validList = [nameValid(), surnameValid(), emailValid(), birthValid(), tourneyValid(), townValid(townRadio), generalValid()];

    // On vérifie si les champs sont vides et erronés
    if (inputList.includes(0) || validList.includes(false)) {
        return false;
    }
    else {
        modalBody.style.display = "none";
        modalValid.style.display = "flex";
        return true;
    }
}

// Reset les données du formulaire
function resetData() {
    document.getElementById("myForm").reset();
    errorReset(formData[0], 0);
    errorReset(formData[1], 1);
    errorReset(formData[2], 2);
    errorReset(formData[3], 3);
    errorReset(formData[4], 4);
    errorReset(formData[5], 5);
    errorReset(formData[6], 6);
}


// Validation Prénom
function nameValid() {
    if (formInput[0].value.length > 1) { // si le prénom fait plus de 1 charactère
        errorReset(formData[0], 0); // reset l'erreur 1
        return true; // la fonction retourne true
    }
    else { // sinon
        errorMessage(error1, formData[0], 0); // affiche le message d'erreur du prénom
        return false; // la fonction retourne false
    }
}

// Validation Nom de famille
function surnameValid() {
    if (formInput[1].value.length > 1) {
        errorReset(formData[1], 1);
        return true;
    }
    else {
        errorMessage(error2, formData[1], 1);
        return false;
    }
}

// Validation email
function emailValid() {
    if (regMail.test(formInput[2].value)) {
        errorReset(formData[2], 2);
        return true;
    }
    else {
        errorMessage(error3, formData[2], 2);
        return false;
    }
}

// Validation Date de naissance
function birthValid() {
    if (regBirth.test(formInput[3].value)) {
        errorReset(formData[3], 3);
        return true;
    }
    else {
        errorMessage(error4, formData[3], 3);
        return false;
    }
}

// Validation concours
function tourneyValid() {
    if (regTourney.test(formInput[4].value)) {
        errorReset(formData[4], 4);
        return true;
    }
    else {
        errorMessage(error5, formData[4], 4);
        return false;
    }
}

// Validation ville
function townValid(i) {
    if (document.querySelectorAll('[name="location"]:checked').length > 0) {
        errorReset(formData[5], 5);
        return true;
    }
    else {
        errorMessage(error6, formData[5], 5);
        return false;
    }
}

// Validation conditions générales
function generalValid() {
    if (document.getElementById('checkbox1').checked) {
        errorReset(formData[6], 6);
        return true;
    }
    else {
        errorMessage(error7, formData[6], 6);
        return false
    }
} 

// Génération du message d'erreur
function errorMessage(errorText, formNumber, errorNumber) {

    var newDiv = document.createElement("div"); // Créé une variable contenant une création d'une div
    var newContent = document.createTextNode(errorText); // Créé une variable contenant une du texte reprenant la valeur spécifié

    if (errorState[errorNumber] == false){ // Si l'erreur avec le numéro spécifié n'est pas affiché
    newDiv.appendChild(newContent); // Assigne le texte à la div
    newDiv.setAttribute('class', 'data-error') // Donne la classe data-error à la div

    formNumber.parentNode.insertBefore(newDiv, formNumber.nextSibling); // Insère la div après l'input spécifié

    errorState[errorNumber] = true; // L'erreur est définie comme affichée
    }
    else {
    }

}

// Détruit l'erreur affichée
function errorReset(formNumber, errorNumber) {

    if (errorState[errorNumber] == true) { // Si l'erreur est définie comme affichée
        formNumber.parentNode.removeChild(formNumber.nextSibling); // Enlève la div après l'input spécifié
        errorState[errorNumber] = false; // L'erreur est définie comme cachée
    }
    else {
    }

}