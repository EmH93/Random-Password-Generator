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


const length = document.getElementById("length");
const incNumbers = document.getElementById("numbers");
const incSymbols = document.getElementById("symbols");
const incUpper = document.getElementById("upper");

var slider = document.getElementById("myRange");
var output = document.getElementById("lengthNum");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

// Function to prompt user for password options
  var getPasswordOptions = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
                return alert("Select your password requirements then select Generate Password. Password should contain at least one character type.");
        }
    }
  }) ();

  getPasswordOptions();
  
  // Function for getting a random element from an array
  function getRandom(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
  }
  

  // Function to generate password with user input
  function generatePassword() {
    var passwordLength = Math.floor(Math.random() * (64 - 10 + 1) + 10);
    var pWord = "";
    var allCharacters = specialCharacters.concat(numericCharacters, lowerCasedCharacters, upperCasedCharacters);
    var allCharactersString = allCharacters.toString()
    var finalString = allCharactersString.replaceAll(',', '');
    for (var i = 0; i <= passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * finalString.length);
    pWord += finalString.substring(randomNumber, randomNumber + 1);
    }
    var pattern = new RegExp ("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$");
    if (pattern.test(pWord)){
      return pWord;
      } else {
        alert('Click Generate Password again: Password does not meet requirements.');
      }
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