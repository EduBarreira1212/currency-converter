import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../Converter/Converter.module.scss";
import CurrencySelect from "../CurrencySelect/CurrencySelect";
import { faRightLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Converter = () => {
  const [FromCurrency, setFromCurrency] = useState("USD");
  const [ToCurrency, setToCurrency] = useState("BRL");

  const handleClick = () => {
    setFromCurrency(ToCurrency);
    setToCurrency(FromCurrency);
  }

  return (
    <main className={styles.main}>
      <h2>Currency Converter</h2>
      <label htmlFor="amount-input">Enter amount</label>
      <input id="amount-input" type="number" />
      <section className={styles.section}>
        <CurrencySelect label="From" selectedCurrency={FromCurrency} handleCurrency={(e) => setFromCurrency(e.target.value)}/>
        <button onClick={handleClick}><FontAwesomeIcon icon={faRightLeft}/></button>
        <CurrencySelect label="To" selectedCurrency={ToCurrency} handleCurrency={(e) => setToCurrency(e.target.value)}/>
      </section>
      <button>Get exchange rate</button>
      <span>Result</span>
    </main>
  )
};

export default Converter;