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
var passwordStr = "";
function updateTextInput(val) {
  document.getElementById('sldrange').value = val;
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

  for (var i = 0; i < pwLength.value; i++) {
    var randArrayValue = Math.floor(allChar.length * Math.random());
    var randCharValue = Math.floor(allChar[randArrayValue].length * Math.random());
    var randValue = allChar[randArrayValue][randCharValue];

    passwordStr += randValue;
  }
  return passwordStr;
}

// Write password to the #password input
function writePassword() {
  if (pwLength.value < 129 && pwLength.value > 7) {
    passwordStr = "";
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    ///makes document.querySelector("#password")
    passwordText.value = password;
  }
  else {
    alert("Please enter a value between 8 and 128");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function myFunction() {
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}
