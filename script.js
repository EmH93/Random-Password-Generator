// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Function to prompt user for password options
function getPasswordOptions() {
  document.getElementById("passwordPromptBox").style.display = "block";
}

// Function for getting a random element from an array
function getRandom(arr) {
return arr[Math.floor(Math.random()*arr.length)];
}

//checking random element function works
//console.log(getRandom(allCharacters));

// Function to generate password with user input
function generatePassword() {
  var passwordLength = 20;
  var pWord = "";
  var allCharacters = specialCharacters.concat(numericCharacters, lowerCasedCharacters, upperCasedCharacters);
  var allCharactersString = allCharacters.toString()
  var finalString = allCharactersString.replaceAll(',', '');
  for (var i = 0; i <= passwordLength; i++) {
  let randomNumber = Math.floor(Math.random() * finalString.length);
  pWord += finalString.substring(randomNumber, randomNumber + 1);
  }
  return pWord;
}




// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);