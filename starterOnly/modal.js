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
/*
        //taille des données rentrée par l'utilisateur
        firstName = formData[0].value.length;
        lastName = formData[1].value.length;
        email = formData[2].value.length;
        birthDate = formData[3].value.length;
        tourneyQuantity = formData[4].value.length;
        location = townRadio;
        checkbox = formData[11];
        
    console.log(firstName);
    console.log(lastName);
    
        //on vérifie si les champs sont vides | email | birthDate | tourneyQuantity | location | checkbox
        if (firstName && lastName  == 0) {	
            console.log("champ vide")
        }
        else {	
            console.log("champ ok !")
        }*/
  }


// Validate form
function validateForm(i) {

    i.preventDefault()
    //taille des données rentrée par l'utilisateur
    firstName = formData[0].value.length;
    lastName = formData[1].value.length;
    email = formData[2].value.length;
    birthDate = formData[3].value.length;
    tourneyQuantity = formData[4].value.length;
    //location = townRadio;
    checkbox = formData[11];

    
    let inputList = [];
    inputList.push(firstName, lastName, email, birthDate, tourneyQuantity, location, checkbox);

    //on vérifie si les champs sont vides
    if (firstName  == 0) {	
        console.log("champ vide")
        return false
    }
    else {	
        console.log("champ ok !")
    }
}

