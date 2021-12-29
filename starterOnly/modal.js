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
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData input");
const submitForm = document.querySelector(".btn-submit");
const townRadio = document.querySelectorAll(".location_form [name=\"location\"]");
const reg = /^\d+$/;
const check = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let firstName = formData[0].value.length;
let lastName = formData[1].value.length;
let email = formData[2].value.length;
let birthDate = formData[3].value.length;
let tourneyQuantity = formData[4].value.length;
let checkbox = formData[11];

let inputList = [];


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
    modalbg.style.display = "none";
    resetData();
}


// Validate form
function checkFields() {

    //On récupère la présence d'une donnée pour chaque champs dans une array
    inputList.push(firstName, lastName, email, birthDate, tourneyQuantity, checkbox);

    //On récupère les resultats des fonctions dans une array
    let validList = [nameValid(), surnameValid(), emailValid(), birthValid(), tourneyValid(), townValid(townRadio), generalValid()];

    //on vérifie si les champs sont vides et erronés //  inputList.includes(0)
    if (inputList.includes(0) || validList.includes(false)) {
        console.log("champ vide");
        console.log(validList);
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
}


//validation Prénom
function nameValid() {
    nameLength = formData[0].value.length;
    if (nameLength > 1) {
        return true;
    }
    else {
        return false;
    }
}

//validation Nom de famille
function surnameValid() {
    surnameLength = formData[0].value.length;
    if (surnameLength > 1) {
        return true;
    }
    else {
        return false;
    }
}

//validation email
function emailValid() {
    emailValue = formData[2].value
    if (check.test(emailValue)) {
        return true;
    }
    else {
        return false;
    }
}

//validation Date de naissance
function birthValid() {
    birthValue = formData[3].value;
    if (reg.test(birthValue)) {
        return true;
    }
    else {
        return false;
    }
}

//validation concours
function tourneyValid() {
    tourneyValue = formData[4].value;
    if (reg.test(tourneyValue)) {
        return true;
    }
    else {
        return false;
    }
}

//validation ville
function townValid(i) {
    if(document.querySelectorAll('[name="location"]:checked').length > 0) {
        return true;
    }
    else {
        return false;
    }
}

//validation conditions générales
function generalValid() {
    if (document.getElementById('checkbox1').checked) {
        return true;
    }
    else {
        return false
    }
}