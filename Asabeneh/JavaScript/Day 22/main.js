// Container

const wrapper = document.querySelector('.wrapper');
wrapper.style.display = 'flex';
wrapper.style.width = '800px';
wrapper.style.margin = '0 auto';
wrapper.style.flexDirection = 'column';
wrapper.style.alignItems = 'center';
wrapper.style.justifyContent = 'center';

// Headline

const header = document.createElement('h1');
wrapper.append(header);
header.innerHTML = asabenehChallenges2020.challengeTitle + ' in ';
header.style.fontFamily = 'Open Sans';

// 2020 Year

const year = document.createElement('span');
year.innerText = asabenehChallenges2020.challengeYear;
header.appendChild(year);
year.style.fontSize = '70px';
year.style.fontFamily = 'Open Sans';
year.style.color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(
	Math.random() * 256
)})`;

setInterval(function() {
	year.style.color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(
		Math.random() * 256
	)})`;
}, 1000);

// SubHeader

const subHeader = document.createElement('h3');
wrapper.append(subHeader);
subHeader.innerHTML = asabenehChallenges2020.challengeSubtitle;
subHeader.style.textDecoration = 'underline';
subHeader.style.fontFamily = 'Open Sans';
subHeader.style.marginTop = '0';

// Date + Time

const block = document.createElement('div');
block.innerText = new Date();
block.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(
	Math.random() * 256
)})`;
wrapper.append(block);

block.style.padding = '15px';
block.style.marginBottom = '20px';

setInterval(function() {
	block.innerText = new Date();
	block.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
		Math.random() * 256
	)},${Math.floor(Math.random() * 256)})`;
}, 1000);

// List Container

const list = document.createElement('ul');
wrapper.append(list);
list.style.listStyle = 'none';
list.style.margin = '0';
list.style.marginBlockStart = '0';
list.style.marginBlockEnd = '0';
list.style.paddingInlineStart = '0';
list.style.width = '100%';

// List Elements

const liElements = [ ...asabenehChallenges2020.challenges ];

for (let el of liElements) {
	const li = document.createElement('li');
	li.innerHTML = `<span>${el.name}</span><span>${el.topics[0]}</span><span>${el.status}</span>`;
	list.append(li);
	li.style.padding = '20px';
	li.style.margin = '5px 0';
	li.style.display = 'flex';
	li.style.justifyContent = 'space-between';

	if (el.status === 'Done') {
		li.style.backgroundColor = 'green';
	} else if (el.status === 'Ongoing') {
		li.style.backgroundColor = 'yellow';
	} else {
		li.style.backgroundColor = 'red';
	}
}
