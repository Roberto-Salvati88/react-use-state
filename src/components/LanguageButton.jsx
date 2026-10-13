// Super bonus: bottone come componente. Riceve anche una FUNZIONE come prop (onSelect)
function LanguageButton({ title, isActive, onSelect }) {
  return (
    <button className={isActive ? 'btn active' : 'btn'} onClick={onSelect}>
      {title}
    </button>
  );
}

export default LanguageButton;
