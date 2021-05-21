import { useState } from "react";
import FormInput from "./FormInput";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
	const [buttonClicked, setButtonClicked] = useState(false);

	const buttonClickHandler = () => {
		buttonClicked ? setButtonClicked(false) : setButtonClicked(true);
	};
	const getExpenseInfo = (expenseInfo) => {
		const newExpense = {
			...expenseInfo,
			id: expenseInfo.title + "_" + expenseInfo.amount,
		};
		props.ExpenseInfo(newExpense);
	};
	return (
		<div className="new-expense">
			{buttonClicked ? (
				<FormInput
					InfoOnSave={getExpenseInfo}
					toggleButton={buttonClickHandler}
				/>
			) : (
				<button onClick={buttonClickHandler}>Add Expense</button>
			)}
		</div>
	);
};

export default ExpenseForm;
