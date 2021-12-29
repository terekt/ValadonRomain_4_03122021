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
const townRadio = document.querySelectorAll(".location_form [name=\"location\"]");

// Regex values
const regTourney = /^\d+$/;
const regBirth = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
const regMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

/* A REVOIR Ne fonctionne pas opur l'utilisatiion que je voulais en faire
// Form input values
let firstName = formInput[0].value;
let lastName = formInput[1].value;
let email = formInput[2].value;
let birthDate = formInput[3].value;
let tourneyQuantity = formInput[4].value;
let checkbox = formInput[11];*/

// Error messages
const error1 = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
const error2 = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
const error3 = "Veuillez entrer une adresse mail valide.";
const error4 = "Veuillez choisir une adresse date.";
const error5 = "Veuillez entrer un nombre valide.";
const error6 = "Veuillez choisir une ville.";
const error7 = "Veuillez acceptez les termes et conditions.";

let errorState = [false, false, false, false, false, false, false]

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalClose.forEach((btn) => btn.addEventListener("click", closeModal));

// validate form event
submitForm.addEventListener("click", validateForm);


// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

// close modal form
function closeModal() {
    resetData();
    modalbg.style.display = "none";
}



// Validate form
function checkFields() {

    //On récupère la présence d'une donnée pour chaque champs dans une array
    let inputList = [];
    inputList.push(formInput[0].value.length, formInput[1].value.length, formInput[2].value.length, formInput[3].value.length, formInput[4].value.length, formInput[1]);

    //On récupère les resultats des fonctions dans une array
    let validList = [nameValid(), surnameValid(), emailValid(), birthValid(), tourneyValid(), townValid(townRadio), generalValid()];

    //on vérifie si les champs sont vides et erronés //  inputList.includes(0)
    if (inputList.includes(0) || validList.includes(false)) {
        console.log("champ vide");
        console.log(validList);
        console.log(errorState);
        modalBody.style.display = "none";
        modalValid.style.display = "block";
        return false;
    }
    else {
        console.log("champ ok !");
        console.log(validList);
        return true;
    }
}


//empèche l'envoi du formulaire si les conditions ne sont pas bonnes
function validateForm(x) {
    x.preventDefault();
    checkFields();
}


//reset les données du formulaire
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


//validation Prénom
function nameValid() {
    if (formInput[0].value.length > 1) {
        errorReset(formData[0], 0);
        return true;
    }
    else {
        errorMessage(error1, formData[0], 0);
        return false;
    }
}

//validation Nom de famille
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

//validation email
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

//validation Date de naissance
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

//validation concours
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

//validation ville
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

//validation conditions générales
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

    var newDiv = document.createElement("div");
    var newContent = document.createTextNode(errorText);

    if (errorState[errorNumber] == false){
    newDiv.appendChild(newContent);
    newDiv.setAttribute('class', 'data-error')

    formNumber.parentNode.insertBefore(newDiv, formNumber.nextSibling);

    errorState[errorNumber] = true;
    }
    else {
    }

}

// Détruit l'erreur affichée
function errorReset(formNumber, errorNumber) {

    if (errorState[errorNumber] == true) {
        formNumber.parentNode.removeChild(formNumber.nextSibling);
        errorState[errorNumber] = false;
    }
    else {
    }

}