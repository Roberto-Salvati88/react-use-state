import { useState } from 'react';

// Esercizio base: una card per linguaggio, il bottone mostra la descrizione
function LanguageCards({ languages }) {
  // nello stato salvo l'id del linguaggio aperto (null = nessuno)
  const [openId, setOpenId] = useState(null);

  // se clicco quello già aperto lo chiudo, altrimenti apro quello cliccato
  const handleClick = id => setOpenId(openId === id ? null : id);

  return (
    <div className="cards">
      {languages.map(language => {
        const isOpen = language.id === openId; // stato DERIVATO: non serve un altro useState

        return (
          <div key={language.id} className="card">
            <button className={isOpen ? 'btn active' : 'btn'} onClick={() => handleClick(language.id)}>
              {language.title}
            </button>
            {isOpen && <p>{language.description}</p>}
          </div>
        );
      })}
    </div>
  );
}

export default LanguageCards;
