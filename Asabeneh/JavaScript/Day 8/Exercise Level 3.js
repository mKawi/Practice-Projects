const personAccount = {
	firstName: 'Moudi',
	lastName: 'Kawi',
	incomes: [ 2000, 5000, 2500, 250, 100 ],
	expenses: [ 250, 500, 50, 1000 ],

	totalIncome: function() {
		console.log(this.incomes.reduce((num1, num2) => num1 + num2, 0));
	},

	totalExpense: function() {
		console.log(this.expenses.reduce((num1, num2) => num1 + num2, 0));
	},

	addIncome: function(income) {
		this.incomes.push(income);
	},

	addExpense: function(expense) {
		this.expenses.push(expense);
	}
};

personAccount.totalIncome();
personAccount.addIncome(500);
personAccount.totalIncome();

personAccount.totalExpense();
personAccount.addExpense(1000);
personAccount.totalExpense();
