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

var symbolArr = ["@", "%", "+", "\\", "/", "'", "!", "#", "$",  "^", "?", ":", ",", ")",  "(",  "}",  "{",  "]", "[", "~", "-", "_", ".",];

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

var lengthOfPassword = window.prompt("Enter Password Length: ")
//var symbolOfPassword = window.Boolean ("Do you want symbols?")


if (lengthOfPassword<8|| lengthOfPassword> 128) {
  window.alert("Please enter a password length value of between 8 and 128");
}

//notes below

//var randomNum = Math.random();
//console.log("randomNum", randomNum);

//var  increasedUpperBound = randomNum * 10 // the 10 is the length of the array
//console.log("increasedUpperBound", increasedUpperBound);

//var randomIndex = Math.floor();//rounds down
//console.log("randomIndex", randomIndex); 52:30 api class 1

var result = [];

for (var i =0; i < lengthOfPassword; i++) {
  console.log(result);
  var randomNum = numberArr[Math.floor(Math.random()*numberArr.length)];// summarized all of the above
  result.push(randomNum);
  console.log(result); 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
