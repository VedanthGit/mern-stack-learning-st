// Challenge 3 — Digital Clock Simulation

// Build a mini clock in the console.

// 1. Write a function `showTime()` that:
//     - Creates a `Date` object
//     - Extracts hours, minutes, and seconds
//     - Prints them like `HH:MM:SS`
// 2. Use `setInterval(showTime, 1000)` to update every second.
// 3. After 10 seconds, use `clearInterval` to stop the clock and print `"Clock stopped ⏰"`.

// (Bonus challenge: pad single digits to 2 digits using string concatenation.)

// ### **Extra Challenge Idea for group work**

// Ask them to simulate a **“Morning Routine”** using multiple callbacks:

// ```
// 1. Wake up (after 1 s)
// 2. Brush teeth (after 2 s)
// 3. Eat breakfast (after 3 s)
// 4. Leave for college (after 1 s)

// ```

// Each should call the next step in sequence.

function showTime() {
	const now = new Date();
	let hours = now.getHours();
	let minutes = now.getMinutes();
	let seconds = now.getSeconds();

	hours = hours < 10 ? "0" + hours : hours;
	minutes = minutes < 10 ? "0" + minutes : minutes;
	seconds = seconds < 10 ? "0" + seconds : seconds;
	console.log(`${hours}:${minutes}:${seconds}`);
}

const clockInterval = setInterval(showTime, 1000);
setTimeout(function () {
	clearInterval(clockInterval);
	console.log("Clock stopped ⏰");
}, 10000);

function wakeUp(callback) {
	console.log("Waking up...");
	setTimeout(function () {
		console.log("Awake!");
		callback();
	}, 1000);
}
function brushTeeth(callback) {
	console.log("Brushing teeth...");
	setTimeout(function () {
		console.log("Teeth brushed!");
		callback();
	}, 2000);
}
function eatBreakfast(callback) {
	console.log("Eating breakfast...");
	setTimeout(function () {
		console.log("Breakfast eaten!");
		callback();
	}, 3000);
}

function leaveForCollege() {
	console.log("Leaving for college...");
	setTimeout(function () {
		console.log("Left for college!");
	}, 1000);
}

wakeUp(function () {
	brushTeeth(function () {
		eatBreakfast(function () {
			leaveForCollege();
		});
	});
});
