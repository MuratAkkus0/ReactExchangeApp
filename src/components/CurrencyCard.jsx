import CurrencyCardContainer from "./currencyCard/CurrencyCardContainer"
import "../assets/styles/currency_card.css"
import CurrencyCardPart from "./currencyCard/CurrencyCardPart"
import { MdCompareArrows } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import env from "react-dotenv";

function CurrencyCard() {
    const [data, setData] = useState({});

    useEffect(() => {
        getData()
    }, [])


    const getData = async () => {
        const response = await axios.get(env.BASE_URL, {
            headers: {
                "Content-Type": "application/json",
                "apikey": env.API_KEY,
                "base_currency": "USD"
            }
        })
        setData(response.data.data);
    }


    const handleSubmit = async () => {
        const from = document.querySelector('#fromInput');
        const fromDropdown = document.querySelector("#fromCurrency")
        const to = document.querySelector("#toInput");
        const toDropdown = document.querySelector("#toCurrency");

        if (!isNaN(Number(from.value)) && from.value > 0) {
            let oneCurrency = 1 / data[`${fromDropdown.value}`]
            let result = from.value * (oneCurrency * data[`${toDropdown.value}`])
            to.value = result.toFixed(2);
        }
    }
    const handleValues = () => {
        const from = document.querySelector('#fromInput');
        const fromDropdown = document.querySelector("#fromCurrency")
        const to = document.querySelector("#toInput");
        const toDropdown = document.querySelector("#toCurrency");

        let privateValue = from.value;
        from.value = to.value;
        to.value = privateValue;
        privateValue = fromDropdown.value
        fromDropdown.value = toDropdown.value;
        toDropdown.value = privateValue
    }

    return (
        <>
            <CurrencyCardContainer>
                <div className="currency__card--title">
                    Exchange App
                </div>
                <div className="currency__input--container">
                    <CurrencyCardPart inputId="fromInput" dropdownId="fromCurrency" />
                    <MdCompareArrows onClick={handleValues} className="arrow-ico" />
                    <CurrencyCardPart inputId="toInput" dropdownId="toCurrency" />
                </div>
                <button onClick={handleSubmit} id="submitBtn">Convert</button>
            </CurrencyCardContainer>
        </>
    )
}

export default CurrencyCard