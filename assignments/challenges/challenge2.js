// Challenge 2 — Countdown Timer (clearInterval logic)
// Write a function `countDown(startNumber)` that:

// 1. Starts printing from the given number down to 1, once every second.
// 2. Prints `"Happy New Year! 🎉"` when it reaches 0.
// 3. Stops using `clearInterval`.

// Hint:
// Store the return value of `setInterval` in a variable and clear it when you’re done.

function countDown(startNumber) {
	let currentNumber = startNumber;
	const intervalId = setInterval(function () {
		if (currentNumber > 0) {
			console.log(currentNumber);
			currentNumber--;
		} else {
			console.log("Happy New Year! 🎉");
			clearInterval(intervalId);
		}
	}, 1000);
}

countDown(5);
