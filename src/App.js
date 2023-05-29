import { useEffect, useState } from "react";
import "./App.css";
import Loading from "./hooks/Loading";
import NewsContext from "./hooks/NewsContext";
import NewsList from "./hooks/NewsList";
import UseApi from "./hooks/UseApi";

function App() {
  const { response, loading } = UseApi();
  // We create a new State values to store the news articles.
  const [newsList, setnewsList] = useState({});
  console.log(response);
  // To update the newsList everytime when components information are updated.
  useEffect(() => {
    if (response.articles) {
      setnewsList(response.articles);
    }
  }, [response.articles]);
  return (
    <>
      <div className="App">
        {loading ? (
          <div>
            <Loading />
          </div>
        ) : (
          ""
        )}

        <NewsContext.Provider value={{ newsList, selectedList: {} }}>
          <NewsList />
        </NewsContext.Provider>
      </div>
    </>
  );
}

export default App;
