import { useSelector } from "react-redux";
const Title = (data) => {
  const input = useSelector((state) => state.input.value);
  const font = useSelector((state) => state.font.value);
  const capitalizedTitle = input.charAt(0).toUpperCase() + input.slice(1);
  const pronunciation = data.data.hwi.prs[0].mw;

  return (
    <div className="title">
      <div className="title__text">
        <p className={`title__main-${font}`}>{capitalizedTitle}</p>
        <p className="title__pronunciation">{pronunciation}</p>
      </div>
      <div className="title__button">
        <button className="title__button-play">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="75"
            viewBox="0 0 75 75"
          >
            <g fill="#A445ED" fill-rule="evenodd">
              <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
              <path d="M29 27v21l21-10.5z" />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};
export default Title;
