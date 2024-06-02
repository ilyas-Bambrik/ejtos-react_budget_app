
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

export const CurrencyPicker =(props)=>{

    const { dispatch  } = useContext(AppContext);

    const [chooseCurrency, setCurrency] = useState("£");

    const submitEvent = (newCurrency) => {

                dispatch({
                    type: 'CHG_CURRENCY',
                    payload: newCurrency,
                });
                setCurrency(newCurrency)
            
    };

    return (
        <select className="custom-select" id="inputGroupSelect02" onChange={(event) => submitEvent(event.target.value)}
         style= {{
            backgroundColor:'lightgreen'
         }}>
        <option defaultValue>Currency £(Pound)</option>
        <option value="$" name="dollar" selected={chooseCurrency=="$"}>$ Dollar</option>
        <option value="£" name="pound" selected={chooseCurrency=="£"}> £ Pound</option>
        <option value="€" name="Euro" selected={chooseCurrency=="€"}> € Euro</option>
        <option value="₹" name="Rupee" selected={chooseCurrency=="₹"}>₹ RupeeRupee</option>
  </select>
    )
}
