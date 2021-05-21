import { useState } from "react";
import ExpenseFilter from "../Filtering/ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import ExpenseChart from "./ExpenseChart";
import "./Expenses.css";
const Expenses = (props) => {
	const [year, setYear] = useState("");
	const yearHandler = (selectedYear) => {
		setYear(Number(selectedYear));
	};
	let expensesContent = [];
	let filteredExpenses=[];
	if (year > 0) {
		 filteredExpenses = props.expenses.filter((expense) => {
			return expense.date.getFullYear() === year;
		});
		if (filteredExpenses.length > 0) {
			expensesContent = filteredExpenses.map((expense) => (
				<ExpenseItem
					key={expense.id}
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			));
		}
	} else {
		filteredExpenses=props.expenses;
		expensesContent = props.expenses.map((expense) => (
			<ExpenseItem
				key={expense.id}
				title={expense.title}
				amount={expense.amount}
				date={expense.date}
			/>
		));
	}

	return (
		<>
			<ExpenseFilter getYear={yearHandler} selected={year} />
			<ExpenseChart expenses={filteredExpenses} />
			{expensesContent}
		</>
	);
};
export default Expenses;
