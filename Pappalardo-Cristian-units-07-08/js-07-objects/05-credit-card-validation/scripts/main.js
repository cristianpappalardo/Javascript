/**
 * @file main.js
 * @author Cristian Pappalardo
 * credit card validation exercise
 * 
 * Write a function validateCreditCard(cardNumber) that validates a credit card number based on the following criteria:
 * - The number must be 16 digits long (excluding dashes).
 * - The number must consist of digits only (after removing dashes).
 * - The number must contain at least two different digits.
 * - The final digit must be even.
 */

/**
 * Validates a credit card number based on specific criteria:
 * - The number must be 16 digits long (excluding dashes).
 * - The number must consist of digits only (after removing dashes).
 * - The number must contain at least two different digits.
 * - The final digit must be even.
 * @param {number} cardNumber the credit card number to validate, which may contain dashes 
 * @returns an object containing the validation result, the original card number, and an error message if invalid
 */
function validateCreditCard(cardNumber) {
	let sanitizedNumber = cardNumber.replace(/-/g, "");

	if (sanitizedNumber.length !== 16) {
		return {
			valid: false,
			number: cardNumber,
			error: "wrong_length",
		};
	}

	if (!/^\d{16}$/.test(sanitizedNumber)) {
		return {
			valid: false,
			number: cardNumber,
			error: "invalid_characters",
		};
	}

	if (/^(\d)\1{15}$/.test(sanitizedNumber)) {
		return {
			valid: false,
			number: cardNumber,
			error: "only_one_type_of_number",
		};
	}

	let finalDigit = Number(sanitizedNumber[sanitizedNumber.length - 1]);
	if (finalDigit % 2 !== 0) {
		return {
			valid: false,
			number: cardNumber,
			error: "odd_final_number",
		};
	}

	let digitSum = 0;
	for (let i = 0; i < sanitizedNumber.length; i++) {
		digitSum += Number(sanitizedNumber[i]);
	}

	if (digitSum <= 16) {
		return {
			valid: false,
			number: cardNumber,
			error: "sum_less_than_16",
		};
	}

	return {
		valid: true,
		number: cardNumber,
	};
}

function printValidationResult(result) {
	console.log("================================");
	console.log("= number : " + result.number + " =");
	console.log("= valid : " + result.valid + " =");

	if (!result.valid) {
		console.log("= error : " + result.error.replace(/_/g, " ") + " =");
	}

	console.log("================================");
}

let cardsToCheck = [
	"9999-9999-8888-0000",
	"4444-4444-4444-4444",
	"6666-6666-6666-1666",
	"a923-3211-9c01-1112",
	"1111-1111-1111-1110",
	"6666-6666-6666-6661",
];

for (let j = 0; j < cardsToCheck.length; j++) {
	let result = validateCreditCard(cardsToCheck[j]);
	printValidationResult(result);
}
