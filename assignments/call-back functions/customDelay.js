// Q12. Custom delay function

// Create a function `waitAndSay(message, delay)` that prints the message after the given delay in milliseconds.

function waitAndSay(message, delay) {
	setTimeout(() => {
		console.log(message);
	}, delay);
}
waitAndSay("Hello after 5 seconds", 5000);
