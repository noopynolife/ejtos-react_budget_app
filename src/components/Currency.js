import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);    

    return (
        <div class="dropdown">
        <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Currency {currency}
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">$ Dollar</a>
            <a class="dropdown-item" href="#">£ Pound</a>
            <a class="dropdown-item" href="#">€ Euro</a>
            <a class="dropdown-item" href="#">₹ Rupee</a>
        </div>
        </div>
    );
};

export default Currency;