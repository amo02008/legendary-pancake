// Assignment Code
var generateBtn = document.querySelector("#generate");
const form = document.getElementById("generatePw")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
const
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol,
};

function getRandomSymbol() {
	const symbols = '~!@#$%^&*()_+{}":?><;.,';
	return symbols[Math.floor(Math.random() * symbols.length)];
}

function getRandomLower() {
	const lowercase = 'abcdefghijklmnopqrstuvwxyz';
	return lowercase[Math.floor(Math.random() * lowercase.length)];
}

function getRandomUpper() {
	const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	return uppercase[Math.floor(Math.random() * uppercase.length)];
}

function getRandomNumber() {
  const number = '0123456789' ;
  return number[Math.floor(Math.random() * number.length)];
}