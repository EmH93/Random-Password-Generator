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

//Connecting html DOM elements to script file
const resultDOM = document.getElementById("result");
const lengthDOM = document.getElementById("myRange");
const incNumbersDOM = document.getElementById("numbers");
const incSymbolsDOM = document.getElementById("symbols");
const incUpperDOM = document.getElementById("upper");
const incLowerDOM = document.getElementById("lower");
const generateDOM = document.getElementById("generate");

//slider configuration
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

  // To check value of length when generate is clicked and to check if check boxes have been selected.
  generateDOM.addEventListener('click', () => {
    const length = +lengthDOM.value;
    const yesLower = incLowerDOM.checked;
    const yesUpper = incUpperDOM.checked;
    const yesNumber = incNumbersDOM.checked;
    const yesSymbol = incSymbolsDOM.checked;
})
  
  // Function for getting a random element from an array
  function getRandom(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
  }
  //Creating random variable for each array
  getRandomLower = getRandom(lowerCasedCharacters);
  getRandomUpper = getRandom(upperCasedCharacters);
  getRandomNumber = getRandom(numericCharacters);
  getRandomSymbol = getRandom(specialCharacters)

  const randomFunc = {
    lowerC: getRandomLower,
    upperC: getRandomUpper,
    num: getRandomNumber,
    symb: getRandomSymbol
  };  

 /* // Function to generate password with user input
  function generatePassword() {
  
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
  generateBtn.addEventListener('click', writePassword); */