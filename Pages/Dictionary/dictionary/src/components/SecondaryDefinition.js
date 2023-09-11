const SecondaryDefinition = ({ data }) => {
  const definitions = data.shortdef.map((definition, i) => {
    return (
      <li key={i}>
        <p>{definition}</p>
      </li>
    );
  });
  return (
    <section className="secondary-definition">
      <div className="secondary-definition__category">
        <p>{data.fl}</p>
        <div className="seperator top-seperator" />
      </div>
      <p className="meaning"> Meaning</p>
      <ul>{definitions}</ul>
      <div className="seperator bottom-seperator"></div>
    </section>
  );
};
export default SecondaryDefinition;
