class Statistics {
	static count(arr) {
		return arr.length;
	}

	static sum(arr) {
		return arr.reduce((a, b) => a + b, 0);
	}

	static min(arr) {
		return Math.min(...arr);
	}
}

class PersonAccount {
	constructor(firstName, lastName, incomes, expenses) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.incomes = incomes;
		this.expenses = expenses;
	}

	get totalIncome() {
		return this.incomes.reduce((a, b), 0);
	}

	get totalExpense() {
		return this.expenses.reduce((a, b), 0);
	}

	set addIncome(income) {
		this.incomes.push(income);
	}

	set addExpense(expense) {
		this.expenses.push(expense);
	}
}
