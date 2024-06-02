
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const { dispatch } = useContext(AppContext);
    const handleBudgetChange = async(event) => {
        if (isNaN (event.target.value)){
            return false
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        });
        if(event.target.value<20000)
            setNewBudget(event.target.value);
    }
    return (
<div className='alert alert-secondary'>
<span>newBudget: £{budget} </span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;