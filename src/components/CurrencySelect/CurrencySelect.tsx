import currencyCodes from "../../shared/currencyCodes";
import styles from "../CurrencySelect/CurrencySelect.module.scss";

interface ICurrencyProps {
  label: string,
  selectedCurrency: string,
  handleCurrency: (e: any) => void,
}


const CurrencySelect: React.FC<ICurrencyProps> = ({label, selectedCurrency, handleCurrency}) => {
  
  return (
    <section className={styles.selectSection}>
      <label htmlFor="select">{label}</label>
      <div>
        <img src={`https://flagsapi.com/${selectedCurrency.substring(0, 2)}/flat/64.png`} alt="flag" />
        <select id="select" value={selectedCurrency} onChange={handleCurrency}>
          {currencyCodes.map((code) => (
            <option key={code} value={code}>{code}</option>
          ))}
        </select>
      </div>
    </section>
  )
};

export default CurrencySelect;