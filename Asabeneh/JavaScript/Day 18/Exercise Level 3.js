const countriesAPI = 'https://restcountries.eu/rest/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

// 1: find the average weight of cat in metric unit

async function averageWeight() {
	try {
		const response = await fetch(catsAPI);
		const data = await response.json();
		const filter = await data.map((el) => el.weight.metric);
		console.log(filter);
	} catch (error) {
		console.log(error);
	}
}

// 2: find out the 10 largest countries

async function largestCountries() {
	try {
		const response = await fetch(countriesAPI);
		const data = await response.json();
		const map = await data.map((el) => el);
		const sort = await map.sort((a, b) => a.population - b.population);
		const filter = await sort.slice(sort.length - 10, sort.length);
		const names = await filter.map((el) => el.name);
		console.log(names.reverse());
	} catch (error) {
		console.log(error);
	}
}

// 3: count total number of languages in the world used as officials

async function totalLanguages() {
	try {
		const response = await fetch(countriesAPI);
		const data = await response.json();
		const map = await data.map((el) => {
			for (let prop of el.languages) {
				return prop.name;
			}
		});
		const set = await new Set(map);
		const count = await set.size;
		console.log(count);
	} catch (error) {
		console.log(error);
	}
}
