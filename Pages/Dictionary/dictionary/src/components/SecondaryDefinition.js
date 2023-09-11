import { useSelector } from "react-redux";

const SecondaryDefinition = ({ data }) => {
  const font = useSelector((state) => state.font.value);

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
        <p className={`bold-${font}`}>{data.fl}</p>
        <div className="seperator top-seperator" />
      </div>
      <p className="meaning"> Meaning</p>
      <ul>{definitions}</ul>
      <div className="seperator bottom-seperator"></div>
    </section>
  );
};
export default SecondaryDefinition;
