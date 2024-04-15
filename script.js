var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random_button = document.querySelector(".randomizer");

function set_gradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", set_gradient);

color2.addEventListener("input", set_gradient);

// Function to generate random color in hexadecimal format
function random_color_hex() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
	// Pad the hexadecimal string with zeros if necessary to ensure it has six digits
	while (randomColor.length < 6) {
		randomColor = '0' + randomColor;
	}

	// Prepend '#' to the hexadecimal color string
	return '#' + randomColor;
}

// Function to randomize colors
function randomizer() {
    color1.value = random_color_hex();
    color2.value = random_color_hex();
    set_gradient();
}

random_button.addEventListener('click', randomizer);