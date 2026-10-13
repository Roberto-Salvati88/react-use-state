import { useState } from 'react';
import LanguageButton from './LanguageButton.jsx';
import LanguageDetail from './LanguageDetail.jsx';

// Bonus: lista di bottoni + una sola card che cambia contenuto
// Lo stato sta nel GENITORE e scende ai figli come props (lifting state up)
function LanguageSelector({ languages }) {
  const [selected, setSelected] = useState(languages[0]);

  return (
    <>
      <div className="buttons">
        {languages.map(language => (
          <LanguageButton
            key={language.id}
            title={language.title}
            isActive={language.id === selected.id}
            onSelect={() => setSelected(language)}
          />
        ))}
      </div>
      <LanguageDetail language={selected} />
    </>
  );
}

export default LanguageSelector;
