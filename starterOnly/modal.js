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
const submitForm = document.querySelector (".btn-submit");
const townRadio = document.querySelectorAll(".location_form [name=\"location\"]");

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

    //On stocke la taille des données rentrée par l'utilisateur
    firstName = formData[0].value.length;
    lastName = formData[1].value.length;
    email = formData[2].value.length;
    birthDate = formData[3].value.length;
    tourneyQuantity = formData[4].value.length;
    //location = townRadio;
    checkbox = formData[11];

    //On récupère les données dans une array
    let inputList = [];
    inputList.push(firstName, lastName, email, birthDate, tourneyQuantity, checkbox);

    //on vérifie si les champs sont vides
    if (inputList.includes(0)) {	
        console.log("champ vide");
        return false;
    }
    else {	
        console.log("champ ok !");
        return true;
    }
}

//empèche l'envoi du formulaire si les conditions ne sont pas bonnes
function validateForm(i) {
    i.preventDefault();
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
    const check = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(check)) {
        return true;
    }
    else {
        return false;
    }
}

//validation concours
function tourneyValid() {
    tourneyValue = formData[4].value;
    tourneyLength = formData[4].value.length;
    if (typeof tourneyValue === 'number' && tourneyLength != 0) {
        return true;
    }
    else {
        return false;
    }
}

//validation ville
function townValid() {

}

//validation conditions générales
function generalValid() {
    if (document.getElementById('checkbox1').checked){
        return true;
    }
    else{
        return false
    }
}