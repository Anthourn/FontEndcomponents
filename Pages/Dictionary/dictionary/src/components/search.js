import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { update } from "../inputSlice";
import { seed } from "../dataSlice";

const Search = (updateData) => {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.input.value);
  const API_KEY = process.env.REACT_APP_API_KEY;

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    if (formJson.searchTerm.length > 0) {
      dispatch(update(formJson.searchTerm));
      fetch(
        `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${formJson.searchTerm}?key=${API_KEY}`
      )
        .then((response) => response.json())
        .then((json) => updateData(json))
        .catch((error) => console.error(error));
    } else {
      setErrorState(true);
    }
  }

  const darkmode = useSelector((state) => state.darkmode.value);

  const [errorState, setErrorState] = useState(false);
  const searchIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
    >
      <path
        fill="none"
        stroke="#A445ED"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"
      />
    </svg>
  );
  return (
    <form onSubmit={handleSubmit} className="search">
      <input
        name="searchTerm"
        className={`search__input ${darkmode ? "search__input-dark" : ""} ${
          errorState ? "search__input-error" : ""
        }`}
        dataIcon="search"
        placeholder="Search for any word..."
      ></input>
      <button className="search__button" type="submit">
        {searchIcon}
      </button>
    </form>
  );
};
export default Search;
