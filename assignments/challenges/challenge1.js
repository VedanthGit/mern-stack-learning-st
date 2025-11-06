// Challenge 1 — Sequential Cooking Steps (callback chain)

// Simulate a 3-step cooking process using `setTimeout` and callbacks.

// Each step should happen **after the previous one finishes**:

// 1. `"Boiling water..."` → after 2 seconds
// 2. `"Adding noodles..."` → after 3 seconds
// 3. `"Serving noodles 🍜"` → immediately after

// Understand how callbacks control the **order of asynchronous actions**.

// (*Bonus:* ask them to print total cooking time at the end.)

function boilWater(callback) {
	console.log("Boiling water...");
	setTimeout(function () {
		console.log("Water boiled!");
		callback();
	}, 2000);
}

function addNoodles(callback) {
	console.log("Adding noodles...");
	setTimeout(function () {
		console.log("Noodles cooked!");
		callback();
	}, 3000);
}

function serveNoodles() {
	console.log("Serving noodles 🍜");
}

const startTime = Date.now();

boilWater(function () {
	addNoodles(function () {
		serveNoodles();
		const endTime = Date.now();
		const totalTime = (endTime - startTime) / 1000;
		console.log(`Total cooking time: ${totalTime} seconds`);
	});
});
