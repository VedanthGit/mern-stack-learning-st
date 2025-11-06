// Q9. setTimeout + callback chain
// Write two functions:
// - `washClothes(callback)` → prints `"Washing clothes..."` then after **3 seconds** prints `"Done washing!"` and calls `callback()`
// - `dryClothes()` → prints `"Drying clothes..."`
// Now call them in sequence:
// `washClothes(dryClothes);`

function washClothes(callback) {
	console.log("Washing clothes...");
	setTimeout(function () {
		console.log("Done washing!");
		callback();
	}, 3000);
}

function dryClothes() {
	console.log("Drying clothes...");
}

washClothes(dryClothes);
