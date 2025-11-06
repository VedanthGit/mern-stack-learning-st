// Q4. Add ingredients

// Write a function `makeJuice(fruit1, fruit2, liquid)` that combines all three values into one string like

// `"Juice made of Apple + Banana + Milk"` and returns it.

// Then print the returned value.

function makeJuice(fruit1, fruit2, liquid) {
	return "Juice made of " + fruit1 + " + " + fruit2 + " + " + liquid;
}

let juice = makeJuice("Apple", "Banana", "Milk");
console.log(juice);
