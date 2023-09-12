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
import Error from "./components/error";

function App() {
  const searchData = useSelector((state) => state.data.value);
  const font = useSelector((state) => state.font.value);
  const darkmode = useSelector((state) => state.darkmode.value);
  const input = useSelector((state) => state.input.value);
  const [data, setData] = useState(definition);
  const API_KEY = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    console.log("running");
    const dataFetch = async () => {
      const response = await fetch(
        `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${input}?key=${API_KEY}`
      );
      const json = await response.json();
      setData(json);
    };
    dataFetch().catch(console.error);
  }, [input]);
  console.log("data", data);
  const routeContent = () => {
    // account for api auto correcting instead of returning undefined
    if (data[0] === undefined || typeof data[0] === "string") {
      return <Error />;
    } else {
      return (
        <main>
          {data[0].fl}
          {data[0].fl ? (
            <>
              <Title data={data[0]} /> <PrimaryDefinition data={data[0]} />
            </>
          ) : (
            <>
              {" "}
              <Title data={data} /> <PrimaryDefinition data={data} />{" "}
            </>
          )}
          {data[1] ? <SecondaryDefinition data={data[1]} /> : ""}
          <Attribution />
        </main>
      );
    }
  };
  return (
    <body className={` ${darkmode ? "body-dark" : ""} `}>
      <div className={`container ${darkmode ? "container-dark" : ""} ${font}`}>
        <Header />
        <Search updateData={setData} />
        {routeContent()}
      </div>
    </body>
  );
}

export default App;
