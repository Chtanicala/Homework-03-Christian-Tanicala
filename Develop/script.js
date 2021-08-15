// Assignment Code
var generateBtn = document.querySelector("#generate");

// Ensures that all values are cleared everytime the page is loaded
window.onload = clearText();

// Clears the text, reset passwordArray Array, and resets password value
function clearText() {
  document.getElementById("password").value = "";
  passwordArray = [];
  password = ""
}

// Function to transpose the password onto the page
function writePassword() {
  clearText();
  var password = passwordCriteria();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Arrays for each of the password criterias
const RandomLower = ["abcdefghijklmnopqrstuvwxyz"]
const RandomUpper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
const RandomNumber = ["0123456789"]
const RandomSpecialCharacter = ["!@#$%^&*(){}[]=<>/,."]

  
// Function that prompts the user for password criteria and adds it to array to be randomly selected from based on their choices
function passwordCriteria() {
 
  const WantsLowers = confirm("Include lower case letters? (Yes = Ok | No = Cancel)");
    if (WantsLowers === true) {
      passwordArray += (RandomLower); 
    } 

  const WantsUppers = confirm("Include upper case letters? (Yes = Ok | No = Cancel)");
    if (WantsUppers === true) {
      passwordArray += (RandomUpper); 
    } 

  const WantsNumbers = confirm("Include numbers? (Yes = Ok | No = Cancel)");
    if (WantsNumbers === true) {
      passwordArray += (RandomNumber); 
    } 

  const WantsSpecialCharacters = confirm("Include Special Characters? (Yes = Ok | No = Cancel)");
    if (WantsSpecialCharacters === true) {
      passwordArray += (RandomSpecialCharacter);
    } 
  const passwordLength = prompt("Specify a password length ( 8 =< and  =< 128)");
    if (passwordLength === null || passwordLength < 8 || passwordLength > 128) {
      alert("Invalid Input");
      return;
    }
  for (let i = 0; i < passwordLength; i++) {
    password += passwordArray[(Math.floor(Math.random() * (passwordArray.length)))];
  }
  console.log(passwordArray)
  return password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





// Test function to try to standardize function
// function WantsCriteria(message, Array) {
//   confirm(message);
//     if (confirm) {
//       passwordArray += (Array); 
//     } 
// }
