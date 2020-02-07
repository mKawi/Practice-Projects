const day = prompt('Enter month:');

switch (day.toLowerCase()) {
	case 'january':
	case 'march':
	case 'may':
	case 'july':
	case 'august':
	case 'october':
	case 'december':
		alert(`${day} has 31 days.`);
		break;
	case 'april':
	case 'june':
	case 'september':
	case 'november':
		alert(`${day} has 30 days.`);
		break;
	case 'february':
		alert(`${day} has 28 days.`);
		break;
	default:
		alert(`${day} is not a valid month.`);
}
