import { useSelector } from "react-redux";

const PrimaryDefinition = ({ data }) => {
  const font = useSelector((state) => state.font.value);
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
        <p className={`bold-${font}`}>{data.fl}</p>
        <div className="seperator" />
      </div>
      <p className="meaning"> Meaning</p>

      <ul>{definitions}</ul>
      <div className="synonyms">
        <p className="synonym-title">Section</p>
        <p className="synonym-definition"> {data.meta.section}</p>
      </div>
    </section>
  );
};
export default PrimaryDefinition;
