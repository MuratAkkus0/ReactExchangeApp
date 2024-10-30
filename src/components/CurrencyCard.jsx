import CurrencyCardContainer from "./currencyCard/CurrencyCardContainer";
import "../assets/styles/currency_card.css";
import CurrencyCardPart from "./currencyCard/CurrencyCardPart";
import { MdCompareArrows } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";

function CurrencyCard() {
  const [data, setData] = useState({});
  const [fromInput, setFromInput] = useState(0);
  const [toInput, setToInput] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("USD");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get(import.meta.env.VITE_BASE_URL, {
      headers: {
        "Content-Type": "application/json",
        apikey: import.meta.env.VITE_API_KEY,
        base_currency: "USD",
      },
    });
    console.log(response.data.data);

    setData(response.data.data);
  };

  const handleSubmit = async () => {
    if (!isNaN(Number(fromInput)) && fromInput > 0) {
      let oneCurrency = 1 / data[fromCurrency];
      let result = fromInput * (oneCurrency * data[toCurrency]);
      setToInput(result);
    }
  };

  const handleValues = () => {
    const tempCurrency = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(tempCurrency);
    const tempInput = fromInput;
    setFromInput(toInput ?? 0);
    setToInput(tempInput ?? 0);
  };

  return (
    <>
      <CurrencyCardContainer>
        <div className="currency__card--title">Exchange App</div>
        <div className="currency__input--container">
          <CurrencyCardPart
            currencies={Object.keys(data)}
            value={fromInput}
            currency={fromCurrency}
            onValueChange={(value) => setFromInput(value)}
            onCurrencyChange={(currency) => setFromCurrency(currency)}
          />
          <MdCompareArrows onClick={handleValues} className="arrow-ico" />
          <CurrencyCardPart
            currencies={Object.keys(data)}
            value={toInput}
            currency={toCurrency}
            onValueChange={(value) => setToInput(value)}
            onCurrencyChange={(currency) => setToCurrency(currency)}
          />
        </div>
        <button onClick={handleSubmit} id="submitBtn">
          Convert
        </button>
      </CurrencyCardContainer>
    </>
  );
}

export default CurrencyCard;
