import { useContext } from "react";
import NewsContext from "./NewsContext";

function NewsList() {
  const { newsList } = useContext(NewsContext);
  if (newsList.length) {
    return (
      <div className="news_app">
        {newsList.map(({ author, title, urlToImage, description }, index) => {
          return (
            <div className="news_app__container" key={index}>
              <div className="news_app__container_cards">
                <p>{author}</p>
                <h3>{`${title}`}</h3>
                <div className="news_app__container_cards-images">
                  <img className="images" src={`${urlToImage}`} alt="" />
                </div>
                <div className="news_app__container_cards">
                  <p>{`${description}`}</p>
                </div>
                <div></div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default NewsList;
