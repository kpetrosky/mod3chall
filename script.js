// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log ("made it inside function")
  // prompt user how long the passwords needs to be-how many characters
  //var userChoice = window.prompt("Enter R, P, or S:"); ---how long password
  //ask user if want upper/lower/special characters/number etc
  // var playAgain = window.confirm("Play again?");--- asking for each types of characters
  //based on users choices, i need to create a password that fills all those needs that are checked about
  // Get random index from array of options (help set up random index)
 // var index = Math.floor(Math.random() * options.length);
 // var computerChoice = options[index];
  //return created password(handoff)
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
