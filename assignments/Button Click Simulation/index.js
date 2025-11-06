const button = document.getElementById("btn1");
const message = document.getElementById("message");

button.addEventListener("click", () => {
	message.textContent = "Button clicked!";

	setTimeout(() => {
		message.textContent = "Thanks for clicking!";
	}, 2000);
});
