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
  const resultDOM = document.getElementById("password");
  const lengthDOM = document.getElementById("myRange");
  const incNumbersDOM = document.getElementById("numbers");
  const incSymbolsDOM = document.getElementById("symbols");
  const incUpperDOM = document.getElementById("upper");
  const incLowerDOM = document.getElementById("lower");
  const generateDOM = document.getElementById("generate");


  
  // Function for getting a random element from an array
  function getRandom(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
  }

  // To check value of length when generate is clicked and to check if check boxes have been selected, also generates password based on choices
  generateDOM.addEventListener('click', () => {
    const lengthVal = +lengthDOM.value;
    const yesLower = incLowerDOM.checked;
    const yesNumber = incNumbersDOM.checked;
    const yesUpper = incUpperDOM.checked;
    const yesSymbol = incSymbolsDOM.checked;

  resultDOM.innerText = generatePassword(yesLower, yesUpper, yesNumber, yesSymbol, lengthVal);
  })

  // Function to generate password with user input
  function generatePassword() {
    return +lengthDOM.value;
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

  //Password length slider configuration
  var slider = document.getElementById("myRange");
  var output = document.getElementById("lengthNum");
  output.innerHTML = slider.value;
  slider.oninput = function() {
  output.innerHTML = this.value;
  }



  /* // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword); */