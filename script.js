// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declaring variables globally so they can be used by characterPrompt and generatePassword functions
var lowercasePrompt
var uppercasePrompt
var numbersPrompt
var specialCharactersPrompt



function lengthPrompt() {
  // Confirm if user wants to include a length criteria and if yes prompt for required length
  // if no then return default lengthCriteria of 8
  var lengthCriteria = 8

  var includeLengthCriteria = window.confirm("Do you want to include the length criteria?");
  
  if (includeLengthCriteria) {
    // prompt user for required length, continue to prompt user until acceptable length is given
    acceptableInput = false;
    while (!acceptableInput){
      lengthCriteria = window.prompt("Enter the length criteria (number must be <=8 and >=128): ");
      // check to see if the input is within range otherwise send alert
      if ( 8 <= lengthCriteria  && lengthCriteria <= 128) { 
        acceptableInput = True
      } else {
        window.alert("Length criteria must be between 8 and 128");
      }
    }
  }

  return lengthCriteria;
}


function characterPrompt() {
  // Confirm which character criteria the user wants to include
  // If no criteria is selected alert the user that they must choose at least one
  // keep looping through the choices until one is selected
  characterTypeSelected = false;
  while (!characterTypeSelected){
    lowercasePrompt = window.confirm("Do you want to include lowercase letters?");
    uppercasePrompt = window.confirm("Do you want to include uppercase letters?");
    numbersPrompt = window.confirm("Do you want to include numbers?");
    specialCharactersPrompt = window.confirm("Do you want to include special characters?");
    if (lowercasePrompt || uppercasePrompt || numbersPrompt || specialCharactersPrompt) { // check that at least one is selected
      characterTypeSelected = true;
    } else {
      window.alert("Please select at least one character type");
    }
  }
}



function generatePassword(){
  var length = lengthPrompt();
  characterPrompt();
  var password = "";
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
