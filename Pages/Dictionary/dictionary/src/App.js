import "./App.css";
import definition from "./example";
import Title from "./components/Title";
import Header from "./components/Header";
import PrimaryDefinition from "./components/PrimaryDefinition";
import SecondaryDefinition from "./components/SecondaryDefinition";
import Attribution from "./components/Attribution";
import Search from "./components/Search";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function App() {
  const font = useSelector((state) => state.font.value);
  const darkmode = useSelector((state) => state.darkmode.value);
  const input = "keyboard";
  console.log(font, darkmode);
  const [data, setData] = useState(definition);
  const API_KEY = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    fetch(
      `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${input}?key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, [input]);
  console.log(data);
  return (
    <body>
      <div className={`container ${darkmode ? "container-dark" : ""} ${font}`}>
        <Header darkmode={darkmode} />
        <Search />
        <main>
          <Title /> <PrimaryDefinition />
          <SecondaryDefinition />
        </main>

        <Attribution />
      </div>
    </body>
  );
}

export default App;
