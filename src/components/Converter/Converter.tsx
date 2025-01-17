import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../Converter/Converter.module.scss";
import CurrencySelect from "../CurrencySelect/CurrencySelect";
import { faRightLeft } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { getCurrency } from "../../services/getCurrency";

const Converter = () => {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [ToCurrency, setToCurrency] = useState("BRL");
  const [amount, setAmount] = useState<number>();

  const amountRef = useRef<HTMLInputElement | null>(null);

  const handleCurrencyConversion = async (from: string, to: string) => {
    const currency = await getCurrency(from, to, Number(amountRef.current?.value));
    if(currency){
      setAmount(currency);
    }
  }

  const handleClick = async () => {
    setFromCurrency(ToCurrency);
    setToCurrency(fromCurrency);
    handleCurrencyConversion(ToCurrency, fromCurrency);
  }

  return (
    <main className={styles.main}>
      <h2>Currency Converter</h2>
      <label htmlFor="amount-input">Enter amount</label>
      <input ref={amountRef} id="amount-input" type="number" />
      <section className={styles.section}>
        <CurrencySelect label="From" selectedCurrency={fromCurrency} handleCurrency={(e) => {setFromCurrency(e.target.value); setAmount(0)}}/>
        <button onClick={handleClick}><FontAwesomeIcon icon={faRightLeft} color="black"/></button>
        <CurrencySelect label="To" selectedCurrency={ToCurrency} handleCurrency={(e) => {setToCurrency(e.target.value); setAmount(0)}}/>
      </section>
      <button onClick={e => handleCurrencyConversion(fromCurrency, ToCurrency)}>Get exchange rate</button>
      <span>{amount ? `${amountRef.current?.value} ${fromCurrency} = ${amount?.toFixed(2)} ${ToCurrency}` : `0 ${fromCurrency} = 0 ${ToCurrency}`}</span>
    </main>
  )
};

export default Converter;