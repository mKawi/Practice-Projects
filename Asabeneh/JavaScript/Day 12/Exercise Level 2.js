const paragraph =
	'I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.';

const regex = /[a-z]+/gi;

const match = paragraph.match(regex);

// console.log(match)

const tenMostFrequentWords = (para) => {
	const reg = /\w+/g;
	const matchWords = para.match(reg);
	let wordCounts = {};

	for (let i = 0; i < matchWords.length; i++) {
		wordCounts[matchWords[i]] = (wordCounts[matchWords[i]] || 0) + 1;
	}

	function compareSecondColumn(a, b) {
		if (a[1] === b[1]) {
			return 0;
		} else {
			return a[1] > b[1] ? -1 : 1;
		}
	}

	const wordsNested = Object.entries(wordCounts);
	const wordCountsSorted = wordsNested.sort(compareSecondColumn);

	let outputArr = [];

	for (let i = 0; i < 10; i++) {
		outputArr.push(wordCountsSorted[i]);
	}

	console.log(outputArr);
};

tenMostFrequentWords(paragraph);
