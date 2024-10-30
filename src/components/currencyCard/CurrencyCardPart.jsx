function CurrencyCardPart(props) {
  const {
    onCurrencyChange,
    currency,
    onValueChange,
    value,
    currencies = [],
  } = props;

  return (
    <div className="currency__part">
      <select
        name="currency_dropdown"
        className="currency__dropdown"
        value={currency}
        onChange={(e) => onCurrencyChange(e.target.value)}
      >
        {currencies.map((item, key) => (
          <option key={key} value={item} className="currency__option--option">
            {item}
          </option>
        ))}
      </select>
      <input
        type="number"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        className="currency__input"
      ></input>
    </div>
  );
}

export default CurrencyCardPart;
