import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import ExpenseForm from "./components/NewExpenseForm/ExpenseForm";
import Card from "./components/UI/Card";

const expenses = [];

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
