// Q3. Function calling another function

// Create two functions:

// 1. `greetUser()` → prints `"Welcome to Student Tribe!"`
// 2. `showMenu()` → calls `greetUser()` first, then prints `"Here is your course menu!"`

// Now call only `showMenu()` in your code and check the order of messages.

function greetUser() {
	console.log("Welcome to Student Tribe!");
}

function showMenu() {
	greetUser();
	console.log("Here is your course menu!");
}

showMenu();
