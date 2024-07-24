import currencyCodes from "../../shared/currencyCodes";

interface ICurrencyProps {
    label: string,
}


const CurrencySelect: React.FC<ICurrencyProps> = ({label}) => {
  return (
    <div>
          <label htmlFor="select">{label}</label>
          <img src={`https://flagsapi.com/${currencyCodes[0].substring(0, 2)}/flat/64.png`} alt="flag"/>
          <select id="select">
            {currencyCodes.map((code, index) => (
              <option key={index} value={code}>{code}</option>
            ))}
          </select>
        </div>
  )
};

export default CurrencySelect;