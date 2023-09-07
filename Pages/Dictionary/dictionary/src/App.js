import "./App.css";
import { useEffect, useState } from "react";
import definition from "./example";
import Title from "./components/Title";
import Header from "./components/Header";
import PrimaryDefinition from "./components/PrimaryDefinition";
import SecondaryDefinition from "./components/SecondaryDefinition";
import Attribution from "./components/Attribution";
import Search from "./components/Search";

function App() {
  console.log(definition);
  // const [data, setData] = useState(null);
  const API_KEY = process.env.REACT_APP_API_KEY;
  // useEffect(() => {
  //   fetch(
  //     `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${input}?key=${API_KEY}`
  //   )
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => console.error(error));
  // }, [input]);
  return (
    <body>
      <div className="container">
        {/* {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Loading..."} */}
        <Header />
        <Search />
        <main>
          <Title /> <PrimaryDefinition />
          <SecondaryDefinition />
        </main>

        <Attribution />
        {/* {definition[0].meta.id} */}
      </div>
    </body>
  );
}

export default App;
