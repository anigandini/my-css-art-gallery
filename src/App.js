import styles from './App.module.css';
import Diamond from './components/Diamond'
import Envelope from './components/Envelope'
import YingYang from './components/YingYang'
import RetroGirl from './components/RetroGirl'


function App() {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <h1> My CSS art gallery</h1>
      </header>
      <main>
        <Diamond />
        <Envelope />
        <YingYang />
        <RetroGirl />
      </main>
    </div>
  );
}

export default App;
