const catsAPI = 'https://api.thecatapi.com/v1/breeds';

// v1: fetch/Promise

fetch(catsAPI)
	.then((response) => response.json())
	.then((response) => response.map((data) => data.name))
	.then((data) => console.log(data))
	.catch((err) => console.log(err));

// v2: async/await

async function getCatNames() {
	try {
		const response = await fetch(catsAPI);
		const data = await response.json();
		const arr = await data.map((el) => el.name);
		console.log(arr);
	} catch (err) {
		console.log(err);
	}
}

getCatNames();
