import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../Converter/Converter.module.scss";
import CurrencySelect from "../CurrencySelect/CurrencySelect";
import { faRightLeft } from "@fortawesome/free-solid-svg-icons";

const Converter = () => {
  return (
    <main className={styles.main}>
      <h2>Currency Converter</h2>
      <label htmlFor="amount-input">Enter amount</label>
      <input id="amount-input" type="number" />
      <section className={styles.section}>
        <CurrencySelect label="From"/>
        <button><FontAwesomeIcon icon={faRightLeft}/></button>
        <CurrencySelect label="To"/>
      </section>
      <button>Get exchange rate</button>
      <span>Result</span>
    </main>
  )
};

export default Converter;