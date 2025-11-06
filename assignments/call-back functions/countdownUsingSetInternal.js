// Q8. Countdown using setInterval

// Write a function `startCountdown()` that:

// 1. Starts a number from 5
// 2. Uses `setInterval` to print numbers 5 → 1 every second
// 3. After reaching 0, prints `"Time’s up!"` and stops the interval using `clearInterval`

// (Hint: Store the interval ID in a variable.)

function startCountdown() {
	let count = 5;
	const intervalId = setInterval(function () {
		if (count > 0) {
			console.log(count);
			count--;
		} else {
			console.log("Time’s up!");
			clearInterval(intervalId);
		}
	}, 1000);
}

startCountdown();
