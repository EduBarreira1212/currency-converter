import styles from "../src/App.module.scss";
import Converter from "./components/Converter/Converter";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className={styles.App}>
      <Converter/>
      <Footer/>
    </div>
  );
}

export default App;
