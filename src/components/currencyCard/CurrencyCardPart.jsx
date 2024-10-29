import { useState } from "react";



// async function getKeys() {
//     let data = await getData();
//     console.log(data)
//     return Object.keys(data);
// }

function CurrencyCardPart(props) {
    let val = []
    const { inputId, dropdownId } = props;
    const [currencies, setCurrencies] = useState(['USD', 'TRY', 'EUR']);




    return (
        <div className="currency__part">
            <select id={dropdownId} name="currency_dropdown" className="currency__dropdown">

                {currencies.map((item, key) => <option key={key} value={item} className="currency__option--option">{item}</option>)}

            </select>
            <input type="number" id={inputId} className="currency__input">
            </input>
        </div>
    )
}

export default CurrencyCardPart