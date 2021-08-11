// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

function PasswordCriteria() {
  confirm("Include lower case letters? (Yes = Ok | No = Cancel)")
  
  if (PasswordCriteria) {
    window.confirm("Include upper case letters? (Yes = Ok | No = Cancel)")
  } else {
      window.confirm("Include upper case letters? (Yes = Ok | No = Cancel)")
     }

}

function RandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function RandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function RandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function RandomSpecialCharacter() {
  const SpecialCharacters = "!@#$%^&*(){}[]=<>/,.";
  return SpecialCharacters[Math.floor(Math.random() * SpecialCharacters.length)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", PasswordCriteria);

console.log(RandomSpecialCharacter());

// window.confirm("Include lower case letters? (Yes = Ok | No = Cancel)")

  // const criteria = ["Include lower case letters? (Yes = Ok | No = Cancel)", "Include upper case letters? (Yes = Ok | No = Cancel)"];
  // for (i = 0; i < criteria.length; i++) {
  // windoww.confirm (criteria[i]);