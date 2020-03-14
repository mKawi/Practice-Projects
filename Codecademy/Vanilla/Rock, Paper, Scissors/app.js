const getUserChoice = (userInput) => {
	const input = userInput.toLowerCase();
	if (input === 'rock' || input === 'paper' || input === 'scissors' || input === 'bomb') {
		return input;
	} else {
		console.log('ERROR: Incorrect input');
	}
};

const getComputerChoice = () => {
	const randomNum = Math.floor(Math.random() * 3);

	if (randomNum === 0) {
		return 'rock';
	} else if (randomNum === 1) {
		return 'paper';
	} else {
		return 'scissors';
	}
};

const determineWinner = (userChoice, computerChoice) => {
	if (userChoice === computerChoice) {
		return "It's a tie!";
	} else if (userChoice === 'bomb') {
		return 'BOOOOOM! YOU WIN!';
	} else if (userChoice === 'rock' && computerChoice === 'paper') {
		return 'Paper beats rock! You lose.';
	} else if (userChoice === 'paper' && computerChoice === 'rock') {
		return 'Paper beats rock! You win.';
	} else if (userChoice === 'rock' && computerChoice === 'scissors') {
		return 'Rock beats scissors! You win.';
	} else if (userChoice === 'scissors' && computerChoice === 'rock') {
		return 'Rock beats scissors! You lose.';
	} else if (userChoice === 'paper' && computerChoice === 'scissors') {
		return 'Scissors beats paper! You lose.';
	} else if (userChoice === 'scissors' && computerChoice === 'paper') {
		return 'Scissors beats paper! You win.';
	}
};

const playGame = () => {
	const userChoice = getUserChoice('rock');
	const computerChoice = getComputerChoice();
	console.log(determineWinner(userChoice, computerChoice));
};

playGame();
