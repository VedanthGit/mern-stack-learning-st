// Q6. Simple callback greeting
// Write a function `greet(name, callback)` that prints

// `"Hello <name>"`,

// then calls the `callback()` function you pass in.

function greet(name, callback) {
	console.log("Hello " + name);
	callback();
}

greet("Alice", function () {
	console.log("Have a nice day!");
});
