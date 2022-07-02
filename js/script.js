// DOM elements
const inputTextFields = document.querySelectorAll(".formbox__inputbox .textInput"); // all input fields expect email
const inputFields = document.querySelectorAll(".formbox__inputbox input"); // all inputs
const emailInput = document.querySelector(".formbox__inputbox .emailInput");
const emailError = document.querySelector(".formbox__inputbox .emailError");
const form = document.querySelector(".formbox form");

// valid email regex
const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

inputTextFields.forEach((input) => {
	input.addEventListener("blur", () => {
		if (input.value === "") {
			input.parentElement.classList.add("error");
		} else {
			input.parentElement.classList.remove("error");
		}
	});
});

emailInput.addEventListener("blur", () => {
	if (emailInput.value === "") {
		emailError.textContent = "Email Address cannot be empty";
		emailInput.parentElement.classList.add("error");
	} else if (!emailInput.value.match(validEmail)) {
		emailError.textContent = "Looks like this is not an email";
		emailInput.parentElement.classList.add("error");
	} else {
		emailInput.parentElement.classList.remove("error");
	}
});

form.addEventListener("submit", (e) => {
	inputFields.forEach((input) => {
		if (input.value === "") {
			e.preventDefault();
		} else if (input.parentElement.classList.contains("error")) {
			e.preventDefault();
		}
	});
});
