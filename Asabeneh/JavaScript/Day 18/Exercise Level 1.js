const countriesAPI = 'https://restcountries.eu/rest/v2/all?fields=name;capital;languages;population;area';

// v1: fetch/Promise

fetch(countriesAPI)
	.then((response) => response.json())
	.then((data) => {
		console.log(data);
	})
	.catch((err) => {
		console.log(err);
	});

// v2: async/await

async function getCountries() {
	try {
		const response = await fetch(countriesAPI);
		const countries = await response.json();
		console.log(countries);
	} catch (err) {
		console.log(err);
	}
}
