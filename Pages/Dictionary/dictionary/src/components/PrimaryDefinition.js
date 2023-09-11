import definition from "../example";
import { useSelector, useDispatch } from "react-redux";

const PrimaryDefinition = ({ data }) => {
  const definitions = data.shortdef.map((definition, i) => {
    return (
      <li key={i}>
        <p>{definition}</p>
      </li>
    );
  });
  return (
    <section className="primary-definition">
      <div className="primary-definition__category">
        <p>{data.fl}</p>
        <div className="seperator" />
      </div>
      <p className="meaning"> Meaning</p>

      <ul>{definitions}</ul>
      <div className="synonyms">
        <p className="synonym-title">Synonyms</p>
        <p className="synonym-definition"> Electronic Keyboard</p>
      </div>
    </section>
  );
};
export default PrimaryDefinition;
