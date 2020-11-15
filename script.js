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

	var charAmountElement = document.querySelector("#characterAmountNumber")
	console.log("here is the number element")
	console.log(charAmountElement)

	var charAmountValue = charAmountElement.value;
	console.log(charAmountValue)

	// var randomCharacters = [numberString, uppercaseString, lowercaseString, symbolsString]

	for (var i = 0; i > 8, i <= 128; i++) {
		var randomLocation = (Math.floor(Math.random() * numberString))
		console.log(numberString.charAt(randomLocation));
	}
	
	
	for (var i = 0; i > 8, i <= 128; i++) {
		var randomLocation = (Math.floor(Math.random() * symbolsString))
		console.log(symbolsString.charAt(randomLocation));
	}

	for (var i = 0; i > 8, i <= 128; i++) {
		var randomLocation = (Math.floor(Math.random() * lowercaseString))
		console.log(lowercaseString.charAt(randomLocation));
	}
	
	for (var i = 0; i > 8, i <= 128; i++) {
		var randomLocation = (Math.floor(Math.random() * uppercaseString))
		console.log(uppercaseString.charAt(randomLocation));
	}


	
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

