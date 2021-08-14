// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


function writePassword() {
  clearText();
  var password = passwordCriteria();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
let RandomLower = ["abcdefghijklmnopqrstuvwxyz"]
let RandomUpper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
let RandomNumber = ["0123456789"]
let RandomSpecialCharacter = ["!@#$%^&*(){}[]=<>/,."]
let passwordOutput = [];
let password = "";
  
function passwordCriteria() {
 
  let WantsLowers = confirm("Include lower case letters? (Yes = Ok | No = Cancel)");
    if (WantsLowers === true) {
      passwordOutput += (RandomLower); 
    } 

  let WantsUppers = confirm("Include upper case letters? (Yes = Ok | No = Cancel)");
    if (WantsUppers === true) {
      passwordOutput += (RandomUpper); 
    } 

  let WantsNumbers = confirm("Include numbers? (Yes = Ok | No = Cancel)");
    if (WantsNumbers === true) {
      passwordOutput += (RandomNumber); 
    } 

  let WantsSpecialCharacters = confirm("Include Special Characters? (Yes = Ok | No = Cancel)");
    if (WantsSpecialCharacters === true) {
      passwordOutput += (RandomSpecialCharacter);
    } 
  let passwordLength = prompt("Specify a password length ( 8 =< and  =< 128)");
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Invalid Input");
    }
  
  for (let i = 0; i < passwordLength; i++) {
    password += passwordOutput[(Math.floor(Math.random() * (passwordOutput.length)))];
  }
  console.log(passwordOutput)
  return password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function clearText() {
  document.getElementById("password").value = "";
  passwordOutput = [];
  password = ""
}

window.onload = clearText();