
import React, { useContext } from 'react';
import { TiDelete, TiMinus, TiPlus } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch,currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name,val) => {
        const expense = {
            name: name,
            cost: val,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>

        <td><TiPlus size='1.5em' className='rounded-btn green-btn' onClick={event=> increaseAllocation(props.name,10)}></TiPlus></td>
        <td><TiMinus size='1.5em' className='rounded-btn red-btn' onClick={event=> increaseAllocation(props.name,-10)}></TiMinus></td>

        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;