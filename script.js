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
        acceptableInput = true;
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
  // get criteria for the password
  var length = lengthPrompt();
  characterPrompt();
  
  // create the character sets that may be used in the password 
  lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't','u', 'v', 'w', 'x', 'y', 'z'];
  // use the lowercase array to create the uppercase array by looping through the values and
  // using the toUpperCase method to convert the value to uppercase and append to the uppercase array
  var uppercaseArray = []
  lowercaseArray.forEach(function (value, i) {
    uppercaseArray.push(value.toUpperCase());
  });
  numbersArray = ['0', '1', '2', '3', '4', '5','6', '7', '8', '9'];
  specialCharactersArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(']
  
  // create the password
  var password = "";
  while (password.length < length) { //continue the loop until the length criteria is met
    // Since we are potentially adding more than one character per loop we add a check before every character is added
    if (lowercasePrompt && password.length < length){ 
      // We randomly generate an index within the array length by using Math.floor(Math.random() * lowercaseArray.length)
      // Math.floor is needed to ensure the index we are passing in is an integer
      password += lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)];
    }
    if (uppercasePrompt && password.length < length){
      password += uppercaseArray[Math.floor(Math.random() * uppercaseArray.length)];
    }
    if (numbersPrompt && password.length < length){
      password += numbersArray[Math.floor(Math.random() * numbersArray.length)];
    }
    if (specialCharactersPrompt && password.length < length){
      password += specialCharactersArray[Math.floor(Math.random() * specialCharactersArray.length)];
    }
  }
  return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
