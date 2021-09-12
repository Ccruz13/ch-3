// Assignment code here
var enter;
var choices;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "~"];

number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function generatePassword() {
  enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));

  if(!enter) {
    alert('This needs a value');
  } else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt("You must choose between 8 and 128"));
  } else {
    confirmNumber = confirm("Will this contain numbers?");
    confirmCharacter = confirm("Will this contain special characters?");
    confirmUppercase = confirm("Will this contain Uppercase letters?");
    confirmLowercase = confirm("Will this contain Lowercase letters?");
  };

  if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    choices = alert("You must choose a criteria!");

  } else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
  choices = character.concat(number, lowerCase, upperCase);

  } else if (confirmCharacter && confirmNumber && confirmLowercase) {
    choices = character.concat(number, lowerCase);
  
  } else if (confirmCharacter && confirmNumber && confirmUppercase) {
  choices = character.concat(number, upperCase);
  
  }  else if (confirmCharacter && confirmLowercase && confirmUppercase) {
    choices = character.concat(lowerCase, upperCase);

  } else if (confirmNumber && confirmLowercase && confirmUppercase) {
    choices = number.concat(lowerCase, upperCase);

  } else if (confirmCharacter && confirmNumber) {
    choices = character.concat(number);

  } else if (confirmCharacter && confirmLowercase) {
      choices = character.concat(lowerCase);

  } else if (confirmCharacter && confirmUppercase) {
      choices = character.concat(upperCase);
  }
  else if (confirmLowercase && confirmNumber) {
      choices = lowerCase.concat(number);

  } else if (confirmLowercase && confirmUppercase) {
      choices = lowerCase.concat(upperCase);

  } else if (confirmNumber && confirmUppercase) {
      choices = number.concat(upperCase);
  }else if (confirmCharacter) {
    choices = character;
  }
  else if (confirmNumber) {
      choices = number;
  }
  else if (confirmLowercase) {
      choices = lowerCase;
  }
  
  else if (confirmUppercase) {
      choices = upperCase;
  };

  var password = [];

  for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices); 

  };

  var ps = password.join("");
    UserInput(ps);
    return ps;
  };

  function UserInput(ps) {
      document.getElementById("password").textContent = ps;

  };


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
