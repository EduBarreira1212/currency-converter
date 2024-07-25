import currencyCodes from "../../shared/currencyCodes";
import styles from "../CurrencySelect/CurrencySelect.module.scss";

interface ICurrencyProps {
    label: string,
}


const CurrencySelect: React.FC<ICurrencyProps> = ({label}) => {
  return (
    <section className={styles.selectSection}>
      <label htmlFor="select">{label}</label>
      <div>
        <img src={`https://flagsapi.com/${currencyCodes[0].substring(0, 2)}/flat/64.png`} alt="flag" />
        <select id="select">
          {currencyCodes.map((code, index) => (
            <option key={index} value={code}>{code}</option>
          ))}
        </select>
      </div>
    </section>
  )
};

export default CurrencySelect;