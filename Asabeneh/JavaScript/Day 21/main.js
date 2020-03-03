// Wrapper

const wrapper = document.querySelector('.wrapper');
wrapper.style.display = 'flex';
wrapper.style.flexDirection = 'column';
wrapper.style.alignItems = 'center';
wrapper.style.margin = 'auto';
wrapper.style.width = '800px';
wrapper.style.padding = '20px';

// H1

const title = document.querySelector('h1');
title.style.fontFamily = 'Open Sans';
title.style.marginBottom = '0';
title.innerHTML = 'Asabeneh Yetayeh challenges in <span>2020</span>';

// 2020

const year = document.querySelector('span');
year.style.fontSize = '70px';
year.style.color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(
	Math.random() * 256
)})`;

setInterval(function() {
	year.style.color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(
		Math.random() * 256
	)})`;
}, 1000);

// H2

const h2 = document.querySelector('h2');
h2.style.textDecoration = 'underline';
h2.style.fontWeight = '400';

// Date + Time

const block = document.createElement('div');
block.innerText = new Date();
block.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(
	Math.random() * 256
)})`;
h2.insertAdjacentElement('afterEnd', block);

block.style.padding = '15px';
block.style.marginBottom = '20px';

setInterval(function() {
	block.innerText = new Date();
	block.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
		Math.random() * 256
	)},${Math.floor(Math.random() * 256)})`;
}, 1000);

// Progress list

const list = document.querySelector('ul');
list.style.listStyle = 'none';
list.style.margin = '0';
list.style.marginBlockStart = '0';
list.style.marginBlockEnd = '0';
list.style.paddingInlineStart = '0';
list.style.width = '100%';

document.querySelectorAll('li').forEach((li) => {
	li.style.padding = '20px';
	li.style.margin = '5px 0';

	const arr = li.innerText.split(' ');
	if (arr[2] === 'Done') {
		li.style.backgroundColor = 'green';
	} else if (arr[2] === 'Ongoing') {
		li.style.backgroundColor = 'yellow';
	} else {
		li.style.backgroundColor = 'red';
	}
});
