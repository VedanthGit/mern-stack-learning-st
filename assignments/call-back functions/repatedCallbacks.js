// Q11. Repeated callback practice

// Write a function `repeatMessage(message, times)` that uses `setInterval` to print the message repeatedly, once per second.

// After printing it `times` times, stop the interval.

function repeatMessage(message, times) {
	let count = 0;
	const intervalId = setInterval(() => {
		if (count < times) {
			console.log(message);
			count++;
		} else {
			clearInterval(intervalId);
		}
	});
}

repeatMessage("Practice makes perfect!", 5);
