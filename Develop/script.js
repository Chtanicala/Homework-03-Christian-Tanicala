// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

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
generateBtn.addEventListener("click", writePassword);

console.log(RandomSpecialCharacter());