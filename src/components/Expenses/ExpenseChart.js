import React from 'react';
import Chart from '../Chart/Chart';

const ExpenseChart = (props) => {
    const chartDataPoints=[
        {label:"Jan",value:0},
        {label:"Feb",value:0},
        {label:"Mar",value:0},
        {label:"Apr",value:0},
        {label:"May",value:0},
        {label:"jun",value:0},
        {label:"jul",value:0},
        {label:"aug",value:0},
        {label:"sep",value:0},
        {label:"oct",value:0},
        {label:"nov",value:0},
        {label:"dec",value:0},
    ]
    for(const expense of props.expenses)
    {
        const month=expense.date.getMonth();
        chartDataPoints[month].value+=expense.amount;
    }
    return (
        <Chart dataPoints={chartDataPoints}/>
    )
}

export default ExpenseChart
