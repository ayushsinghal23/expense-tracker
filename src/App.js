import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import ExpenseForm from "./components/NewExpenseForm/ExpenseForm";
import Card from "./components/UI/Card";

const expenses = [
	{
		id: "e1",
		title: "Toilet Paper",
		amount: 94.12,
		date: new Date(2020, 7, 14),
	},
	{ id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
	{
		id: "e3",
		title: "Car Insurance",
		amount: 294.67,
		date: new Date(2021, 2, 28),
	},
	{
		id: "e4",
		title: "New Desk (Wooden)",
		amount: 450,
		date: new Date(2021, 5, 12),
	},
];

const App = () => {
	const [allExpenses, setAllExpenses] = useState(expenses);
	const newExpense = (expense) => {
		setAllExpenses((prevState) => {
			const addedExpense = [expense, ...prevState];
			return addedExpense;
		});
	};
	return (
		<div>
			<ExpenseForm ExpenseInfo={newExpense} />
			<Card className="expenses">
				<Expenses expenses={allExpenses} />
			</Card>
		</div>
	);
};

export default App;
