import { useState, useEffect } from "react";

function UseApi(url, payload) {
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      // const APIkey = "";
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=stock&apiKey=e04203a1c8394eedb84b3e546c332d72"
      );
      const data = await response.json();
      // console.log(data)
      setResponse(data);
      setLoading(false);
    };
    fetchApi();
  }, []);
  return { response, loading};
}

export default UseApi;
