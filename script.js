// Assignment Code
var generateBtn = document.querySelector("#generate");

function lengthPrompt() {
  // Confirm if user wants to include a length criteria and if yes prompt for required length
  var includeLengthCriteria = window.confirm("Do you want to include the length criteria?");
  if (includeLengthCriteria) {
    // prompt user for required length, continue to prompt user until acceptable length is given
    acceptableInput = false;
    while (!acceptableInput){
      var lengthCriteria = window.prompt("Enter the length criteria (number must be <=8 and >=128): ");
      // check to see if the input is within range otherwise send alert
      if ( 8 <= lengthCriteria  && lengthCriteria <= 128) { 
        acceptableInput = True
      } else {
        window.alert("Length criteria must be between 8 and 128");
      }
    }
    return lengthCriteria;
  }
  return false;
}


function generatePassword(){
  var length = lengthPrompt();
  if (!length) {
    length = 8;
  }
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
