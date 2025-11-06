// Q7. Callback with order
// Create two functions:

// - `cookRice(callback)` → prints `"Cooking rice..."`, waits **2 seconds** using `setTimeout`, then prints `"Rice ready!"` and calls `callback()`.
// - `eatRice()` → prints `"Eating now 🍚"`

// Now call:

// `cookRice(eatRice);`

// (Hint: Use `setTimeout(callback, 2000)`.)

function cookRice(callback) {
	console.log("Cooking rice...");
	setTimeout(function () {
		console.log("Rice ready!");
		callback();
	}, 2000);
}

function eatRice() {
	console.log("Eating now 🍚");
}

cookRice(eatRice);
