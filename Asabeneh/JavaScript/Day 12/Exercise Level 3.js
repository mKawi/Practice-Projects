const sentence =
	'%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?';

const cleanText = (words) => {
	const regex = /[#%$@;,!&]/g;
	const match = words.match(regex);

	const replace = words.replace(regex, '');

	return replace;
};

cleanText(sentence);

// const mostFrequentWords = words => {
//   const cleanedup = cleanText(words)
//   const reg = /(\w+)/g
//   const matchSentence = cleanedup.match(reg)

//   console.log(matchSentence)

//   for (let i = 0; i < matchSentence.length; i++) {
//     wordCounts[matchWords[i]] = (wordCounts[matchWords[i]] || 0) + 1;
//   }

// }

// mostFrequentWords(sentence)
