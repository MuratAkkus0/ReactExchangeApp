import { useState } from "react";

function CurrencyCardPart(props) {
    const { inputId } = props;
    const [currencies, setCurrencies] = useState(["TL", "EUR", "USD"]);

    return (
        <div className="currency__part">
            <select id="currencyDeopdown" name="currency_dropdown" className="currency__dropdown">

                {currencies.map((item, key) => <option key={key} value="" className="currency__option--option">{item}</option>)}

            </select>
            <input type="number" id={inputId} className="currency__input">
            </input>
        </div>
    )
}

export default CurrencyCardPart