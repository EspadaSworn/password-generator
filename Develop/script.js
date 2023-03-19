// Assignment code here
//between 8 and 128 characters
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var symbolArr = ["@", "%", "+", "\\", "/", "'", "!", "#", "$",  "^", "?", ":", ")",  "(",  "}", ",",  "{",  "]", "[", "~", "-", "_", ".",];

var numberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowerArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var generatePassword = (length,hasNumbers, hasSymbols, hasLower, hasUpper)=>{
  var userArr = [
    (hasNumbers ? numberArr : []),
    (hasSymbols ? symbolArr : []),
    (hasLower ? lowerArr : []),
    (hasUpper ? symbolArr : []),    
  ]
} // check? added last

var lengthOfPassword = parseInt(window.prompt("Enter Password Length: "));
//var symbolOfPassword = window.Boolean ("Do you want symbols?")
var numberChoice= window.prompt("Do you want numbers: 'Yes' or 'No'");
var symbolChoice= window.prompt("Do you want symbols: 'Yes' or 'No'");
var lowerChoice= window.prompt("Do you want lower case letters: 'Yes' or 'No'");
var upperChoice= window.prompt("Do you want upper case letters: 'Yes' or 'No'");


while (lengthOfPassword<8|| lengthOfPassword> 128) {
  window.alert("Please enter a password length value of between 8 and 128");
  lengthOfPassword=parseInt(window.prompt("Enter Password Length: ")); //causes program to cycle
}

if (numberChoice=="Yes") {
  window.alert("Confirmed:Using numbers.")
} else {
  window.alert("Confirmed:No numbers")
}

if (symbolChoice=="Yes") {
  window.alert("Confirmed:Using symbols.")
} else {
  window.alert("Confirmed:No symbols")
}

if (lowerChoice=="Yes") {
  window.alert("Confirmed:Using lower letters.")
} else {
  window.alert("Confirmed:No lower letters")
}

if (upperChoice=="Yes") {
  window.alert("Confirmed:Using upper letters.")
} else {
  window.alert("Confirmed:No upper letters")
}

//notes below

var result = [];

for (var i =0; i < lengthOfPassword; i++) {
  //var randomIndex=Math.floor(Math.random()*numberArr.length);// this or the following, both arent needed
  //var randomNum = numberArr[Math.floor(Math.random()*numberArr.length)];// summarized all of the above
  
  //if (availableCharacters.length===0) return "";



  if (numberChoice=="Yes" && symbolChoice=="Yes" && lowerChoice=="Yes" && upperChoice=="Yes"){
    var randomIndex=userArr[Math.floor(Math.random()*(userArr.length))];
  } else {
    var randomIndex=symbolArr[Math.floor(Math.random()*symbolArr.length)];// removed "," from symbols to avoid confusion
  }
  result.push(randomIndex);
  console.log(result); 
}

console.log(result.join("")); // join combines the password so theres no , between each unit
// Write password to the #password input
function writePassword() {
  password.textContent = (result.join(""));
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



