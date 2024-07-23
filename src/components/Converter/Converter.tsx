import styles from "../Converter/Converter.module.scss";

const Converter = () => {
  return (
    <main className={styles.main}>
      <h2>Currency Converter</h2>
      <label htmlFor="amount-input">Enter amount</label>
      <input id="amount-input" type="number" />
      <section className={styles.section}>
        <div>
          <label htmlFor="from-select">From</label>
          <select id="from-select">

          </select>
        </div>
        <button>Switch</button>
        <div>
          <label htmlFor="to-input">To</label>
          <select id="to-input">

          </select>
        </div>
      </section>
      <button>Get exchange rate</button>
      <span>Result</span>
    </main>
  )
};

export default Converter;