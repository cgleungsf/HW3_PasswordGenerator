// Assignment Code
var generateBtn = document.querySelector("#generate");

var checkNum = document.getElementById("numeric");
var checkLow = document.getElementById("lowercase");
var checkUp = document.getElementById("uppercase");
var checkSplChar = document.getElementById("splchar");
var pwLength = document.getElementById("sldrange");

var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var splchar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "|", "[", "]", ";", "'", ":", "<", ">", "?", "/"];
var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var allChar = [];
function updateTextInput(val) {
  document.getElementById('sldrange').value=val; 
}
function generatePassword() {
  // check what check boxes have been clicked
  if (checkNum.checked === true) {
    allChar.push(num)
  }
  if (checkLow.checked === true) {
    allChar.push(lower)
  }
  if (checkUp.checked === true) {
    allChar.push(upper)
  }
  if (checkSplChar.checked === true) {
    allChar.push(splchar)
  }

  console.log(pwLength.value);

  for (var i = 0; i < pwLength.value; i++) {
    var passwordStr = "";
    var randArrayValue = Math.floor(allChar.length * Math.random());
    var randCharValue = Math.floor(allChar[randArrayValue].length * Math.random());
    var randValue = allChar[randArrayValue][randCharValue];


    passwordStr += randValue;
    console.log(passwordStr);
    // console.log(typeof passwordStr);
    // console.log(typeof randValue);
  }
  return passwordStr;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  ///makes document.querySelector("#password")
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);