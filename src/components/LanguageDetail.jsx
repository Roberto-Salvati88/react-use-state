// Super bonus: card dei dettagli come componente separato
function LanguageDetail({ language }) {
  return (
    <div className="card detail">
      <h3>{language.title}</h3>
      <p>{language.description}</p>
    </div>
  );
}

export default LanguageDetail;
