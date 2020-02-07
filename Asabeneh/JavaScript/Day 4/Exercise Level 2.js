const studentScore = Number(prompt('What was your score?'));

if (studentScore >= 80) {
	alert('You got an A');
} else if (studentScore >= 70) {
	alert('You got an B');
} else if (studentScore >= 60) {
	alert('You got an C');
} else if (studentScore >= 50) {
	alert('You got an D');
} else {
	alert('You got an F');
}

const month = prompt('Enter a month:');

switch (month.toLowerCase()) {
	case 'september':
	case 'october':
	case 'november':
		alert('The season is Autumn');
		break;
	case 'december':
	case 'january':
	case 'february':
		alert('The season is Winter');
		break;
	case 'march':
	case 'april':
	case 'may':
		alert('The season is Spring');
		break;
	case 'june':
	case 'july':
	case 'august':
		alert('The season is Summer');
		break;
	default:
		alert('That is not a month');
}

const day = prompt('What is the day today?');

switch (day.toLowerCase()) {
	case 'monday':
	case 'tuesday':
	case 'wednesday':
	case 'thursday':
	case 'friday':
		alert(`${day} is a weekday.`);
		break;
	case 'saturday':
	case 'sunday':
		alert(`${day} is a weekend.`);
		break;
	default:
		alert('That is not a day.');
}
