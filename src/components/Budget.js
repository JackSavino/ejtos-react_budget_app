import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    useEffect(() => {
        setNewBudget(budget);
    }, [budget]);

    const handleBudgetChange = (event) => {
        const inputValue = parseInt(event.target.value);
        
        if (inputValue > 20000) {
            alert('Budget cannot exceed £20,000.');
        } else if (inputValue < totalExpenses) {
            alert('Budget cannot be less than spending.');
        } else {
            setNewBudget(inputValue);
        }
    };

    const saveBudget = () => {
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
        });
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}
            onBlur={saveBudget}>
            </input>
        </div>
    );
};

export default Budget;