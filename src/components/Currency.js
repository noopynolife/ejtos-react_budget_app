import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);    
    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value
        });
    }
    return (
        <label for="inputCurrency" className="btn btn-success">
            <span>Currency (</span>
            <select className="btn btn-succes" id="inputCurrency" onChange={(event) => handleCurrencyChange(event)}>
                <option value="£" name="Pound">$ Pound</option>
                <option value="$" name="Pound">$ Dollar</option>
                <option value="€" name="Euro">€ Euro</option>
                <option value="₹" name="Rupee">₹ Rupee</option>
            </select>
            <span>)</span>
        </label>
    );
};

export default Currency;