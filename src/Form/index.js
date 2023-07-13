import "./style.css";
import "../index.css";
import { useState } from "react";
import { currencies } from "../currencies.js";
import Result from "../Result";

 const Form = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].code);
  const [result, setResult] = useState();
  const calculateRate = (currency, amount) => {
    const rate = currencies.find(({ code }) => code === currency).rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    calculateRate(currency, amount);
  };

  return (
    <form onSubmit={onSubmit}>
      <fieldset className="form__fieldset">
        <legend className="form__legend">Kalkulator</legend>
          <p>
           <label>
            <span className="form__labelText"> Kwota do przeliczenia:</span>
            <input
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              type="number"
              className="form__field"
              min="0.01"
              step="0.01"
              autoFocus
              required
              placeholder="Wpisz kwotę w zł"
            />
           </label>
          </p>
          <p>
           <label>
            <span className="form__labelText"> Waluta : </span>
            <select
              className="form__field"
              name="currency"
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {currencies.map((currency) => (
                <option 
                  key={currency.code} 
                  value={currency.code}>
                  {currency.id}
                </option>
              ))}
            </select>
           </label>
          </p>
          <button className="form__button">Przelicz</button>
           <p>
            <Result result={result} />
          </p>
      </fieldset>
    </form>
  );
};

export default Form;

