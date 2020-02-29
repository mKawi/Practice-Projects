function personAccount() {
	const firstName = 'Moudi';
	const lastName = 'Kawi';
	const incomes = [ 10, 20, 500, 2000 ];
	const expenses = [ 20, 50, 250, 100 ];

	function totalIncome() {
		return incomes.reduce((a, b) => a + b, 0);
	}

	function totalExpense() {
		return expenses.reduce((a, b) => a + b, 0);
	}

	function addIncome(val) {
		incomes.push(val);
	}

	function addExpense(val) {
		expenses.push(val);
	}

	function accountInfo() {
		return `
            Name: ${firstName} ${lastName}
            Account Balance: ${incomes.reduce((a, b) => a + b, 0) - expenses.reduce((a, b) => a + b, 0)}
            Total income: ${incomes.reduce((a, b) => a + b, 0)}
            Total expense: ${expenses.reduce((a, b) => a + b, 0)}
        `;
	}

	function accountBalance() {
		return incomes.reduce((a, b) => a + b, 0) - expenses.reduce((a, b) => a + b, 0);
	}

	return {
		totalIncome: totalIncome,
		totalExpense: totalExpense,
		addIncome: addIncome,
		addExpense: addExpense,
		accountInfo: accountInfo,
		accountBalance: accountBalance
	};
}
