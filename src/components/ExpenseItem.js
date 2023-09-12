import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { IoIosAddCircle, IoIosRemoveCircle } from 'react-icons/io';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
    
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
    
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td>
            <button onClick={(event) => increaseAllocation(props.name)}
            style={{ backgroundColor: 'white', border: 'none' }}>
                <IoIosAddCircle size={30} style={{ color: 'green' }} />
            </button>
        </td>
        <td>
            <button onClick={(event) => decreaseAllocation(props.name)}
            style={{ backgroundColor: 'white', border: 'none' }}>
                <IoIosRemoveCircle size={30} style={{ color: 'maroon' }} />
            </button>
        </td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;