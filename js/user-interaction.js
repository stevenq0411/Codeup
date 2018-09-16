"use strict";


do {
	var userName = prompt("What is your name?");
} while (userName === "")

alert("Welcome " + userName + "!");

var userFoodResponse = confirm("Do you like pizza?");

if (userFoodResponse) {
	alert("Me too!");
}  else {
	alert("That's ok! We can still be friends");
}

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.

// TODO: Show an alert message that welcomes the user based on their input.

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.
