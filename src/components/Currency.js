// Currency.js

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, changeCurrency } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        changeCurrency(event.target.value);
    };

    return (
        <div className='alert alert-secondary'>
            Currency:
            <select
                name="Currency"
                id="Currency"
                value={currency} // Set the selected value based on the context
                onChange={handleCurrencyChange}
            >
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="₹">₹ Rupee</option>
                <option value="€">€ Euro</option>
            </select>
        </div>
    );
};

export default Currency;