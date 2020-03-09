// Document Selectors

const subtitle = document.querySelector('.subtitle');
subtitle.innerText = `Currently, we have ${countries.length} countries`;

const ul = document.querySelector('ul');

function togglePopulation() {
	ul.innerHTML = '';
	const sortedCountries = countries.sort((a, b) => a.population - b.population);
	const tenCountries = sortedCountries.slice(sortedCountries.length - 10, sortedCountries.length).reverse();
	return tenCountries.map((obj) => {
		const li = document.createElement('li');
		li.innerHTML = `<span>${obj.name}</span><span>${obj.population}</span>`;
		ul.appendChild(li);
	});
}

function toggleLanguages() {
	ul.innerHTML = '';
	const languages = countries.map((el) => {
		for (let prop of el.languages) {
			return prop;
		}
	});

	const counts = {};
	for (var i = 0; i < languages.length; i++) {
		counts[languages[i]] = 1 + (counts[languages[i]] || 0);
	}

	const sortedLangs = counts.sort((a, b) => a - b);
	console.log(sortedLangs);
	// create object that counts each language

	// return uniqueLangs.map((obj) => {
	// 	const li = document.createElement('li');
	// 	li.innerHTML = `<span>${obj.name}</span><span>${obj.population}</span>`;
	// 	ul.appendChild(li);
	// });
}

// Event Listeners

document.querySelector('.population').addEventListener('click', togglePopulation);
document.querySelector('.languages').addEventListener('click', toggleLanguages);
