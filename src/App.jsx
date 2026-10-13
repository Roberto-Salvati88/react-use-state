import languages from './data/languages.js';
import LanguageCards from './components/LanguageCards.jsx';
import LanguageSelector from './components/LanguageSelector.jsx';

function App() {
  return (
    <main className="container">
      <h1>Learn Web Development</h1>

      <h2>Esercizio base</h2>
      <LanguageCards languages={languages} />

      <h2>Bonus e super bonus</h2>
      <LanguageSelector languages={languages} />
    </main>
  );
}

export default App;
