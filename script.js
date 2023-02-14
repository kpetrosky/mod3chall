// prompt user how long the passwords needs to be-how many characters
//var userChoice = window.prompt("Enter R, P, or S:"); ---how long password
//ask user if want upper/lower/special characters/number etc
// var playAgain = window.confirm("Play again?");--- asking for each types of characters
//based on users choices, i need to create a password that fills all those needs that are checked about
// Get random index from array of options (help set up random index)
// var index = Math.floor(Math.random() * options.length);
// var computerChoice = options[index];
//return created password(handoff)
// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
  function writePassword() {
    var password = generatePassword();
    var passwordType = prompt("Enter the type of password you want to generate (upper, lower, numbers, letter and numbers, or all types):");
    var password = generatePassword(passwordLength, passwordType);
    var password = ("Your password is: " + password);

    password.valueOf = password;
    return password;
  }
}

var passwordLength = prompt("Enter the desired password length (minimum 8 characters):");
if (passwordLength < 8) {
  passwordLength = 8;
}
function generatePassword(length, type) {
  var password = "";
  var possibleCharacters = "";
  

  if (type === "numbers") {
    possibleCharacters = "0123456789";
  } else if (type === "upper") {
    possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if (type === "lower") {
    possibleCharacters = "abcdefghijklmnopqrstuvwxyz"
  } else if (type === "letters and numbers") {
    possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  } else {
    (type === "all types")
    possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  }

  for (var i = 0; i < length; i++) {
    password += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
  }

  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  (function () {
    console.log("Your password is: " + password);
  })();
  passwordText.value = password;
}


var password = writePassword(8);
var passwordText = document.querySelector("#password");
passwordText.value = password;
