// Q13. Callback inside callback (nesting)

// Write a small chain:

// 1. `makeTea(callback)` → waits 2 seconds, prints `"Tea ready!"`, then calls callback.
// 2. `serveTea(callback)` → waits 1 second, prints `"Serving tea..."`, then calls callback.
// 3. `drinkTea()` → prints `"Drinking tea ☕"`.

function makeTea(callback) {
	setTimeout(() => {
		console.log("Tea ready!");
		callback();
	}, 2000);
}

function serveTea(callback) {
	setTimeout(() => {
		console.log("Serving tea...");
		callback();
	}, 1000);
}

function drinkTea() {
	console.log("Drinking tea ☕");
}

makeTea(() => {
	serveTea(() => {
		drinkTea();
	});
});
