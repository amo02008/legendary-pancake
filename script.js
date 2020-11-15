// Assignment Code
var generateBtn = document.querySelector("#generate");
// var form = document.getElementById("generatePw")

function generatePassword() {
	var selectedCharacters = ""

	var numberElement = document.querySelector("#includeNumbers")
	// console.log(numberElement)
	var numberChecked = numberElement.checked
	// console.log(numberChecked)
	var numberString = '0123456789'
	if (numberChecked === true) {
		selectedCharacters = selectedCharacters + numberString
	}

	var uppercaseElement = document.querySelector("#includeUppercase")
		var uppercaseChecked = uppercaseElement.checked
		var uppercaseString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	if (uppercaseChecked === true) {
		selectedCharacters = selectedCharacters + uppercaseString
	}

	var lowercaseElement = document.querySelector("#includeLowercase")
		var lowercaseChecked = lowercaseElement.checked
		var lowercaseString = 'abcdefghijklmnopqrstuvwxyz'
	if (lowercaseChecked === true) {
		selectedCharacters = selectedCharacters + lowercaseString
	}

	var symbolsElement = document.querySelector("#includeSymbols")
	// console.log(symbolsElement)
	var symbolsChecked = symbolsElement.checked
	// console.log(symbolsChecked)
	var symbolsString = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
	if (symbolsChecked === true) {
		selectedCharacters = selectedCharacters + symbolsString
	}

	// console.log(selectedCharacters)
	return selectedCharacters
}


// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// const randomFunc = {
// 	lower: getRandomLower,
// 	upper: getRandomUpper,
// 	number: getRandomNumber,
// 	symbol: getRandomSymbol,
// };

// function getRandomSymbol() {
// 	const symbols = '~!@#$%^&*()_+{}":?><;.,';
// 	return symbols[Math.floor(Math.random() * symbols.length)];
// }

// function getRandomLower() {
// 	const lowercase = 'abcdefghijklmnopqrstuvwxyz';
// 	return lowercase[Math.floor(Math.random() * lowercase.length)];
// }

// function getRandomUpper() {
// 	const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// 	return uppercase[Math.floor(Math.random() * uppercase.length)];
// }

// function getRandomNumber() {
//   const number = '0123456789' ;
//   return number[Math.floor(Math.random() * number.length)];
// }