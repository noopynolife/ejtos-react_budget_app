import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, expenses, currency, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        let val = event.target.value; 
        if(event.target.value > 20000) {
            alert("The value cannot exceed "+currency+"20.000");
            val = 20000;
        }
        if(event.target.value < totalExpenses) {
            alert("The value cannot be lower than the current spending  "+currency+""+totalExpenses);
            val = totalExpenses;
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: val
        });
        setNewBudget(val);
    }
    return (
<div className='alert alert-secondary'>
    <span>Budget: {currency}</span>
    <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;