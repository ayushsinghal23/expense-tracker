import './ExpenseFilter.css';
const ExpenseFilter = (props) => {
    const selectHandler=(event)=>{
        props.getYear(event.target.value)
    }
	return (
		<div className="expenses-filter">
			<div className="expenses-filter__control">
				<label>Filter by Year</label>
				<select value={props.selected} onChange={selectHandler}>
                    <option value="">All Expenses</option>
					<option value="2019">2019</option>
					<option value="2020">2020</option>
					<option value="2021">2021</option>
				</select>
			</div>
		</div>
	);
};
export default ExpenseFilter;