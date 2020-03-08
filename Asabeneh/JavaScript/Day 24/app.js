// Selectors

const inputField = document.querySelector('#mass');
const selectField = document.querySelector('select');
const button = document.querySelector('button');
const desc = document.querySelector('.description');
const container = document.querySelector('.flex-container');
const flex = document.querySelectorAll('.flex-item');
const img = document.createElement('img');

flex[0].appendChild(img);
container.style.visibility = 'hidden';

// Submit Function

function submit() {
	let weight = 0;
	console.log(selectField.value);
	switch (selectField.value) {
		case 'earth':
			weight = `${inputField.value * 9.8} N`;
			console.log(weight);
			break;
		case 'pluto':
			weight = `${inputField.value * 0.49} N`;
			break;
		case 'jupiter':
			weight = `${inputField.value * 24.7} N`;
			break;
		case 'mars':
			weight = `${inputField.value * 3.7} N`;
			break;
		case 'mercury':
			weight = `${inputField.value * 3.7} N`;
			break;
		case 'saturn':
			weight = `${inputField.value * 10.5} N`;
			break;
		case 'uranus':
			weight = `${inputField.value * 9} N`;
			break;
		case 'neptune':
			weight = `${inputField.value * 11.7} N`;
			break;
		case 'moon':
			weight = `${inputField.value * 1.7} N`;
			break;
	}

	container.style.visibility = 'visible';
	img.src = `./images/${selectField.value}.png`;

	desc.innerHTML = `<h3>The weigh of the object on: <span class="planet">${selectField.value.toUpperCase()}</span></h3>
        <div class="newtons">${weight}</div>`;
}

// Event Listeners

button.addEventListener('click', submit);
