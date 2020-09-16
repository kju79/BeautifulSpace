import React, { useEffect, useState } from "react";
import "./App.css";
const dotenv = require("dotenv");

dotenv.config();

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    const year = Math.floor(Math.random() * (2020 - 1995) + 1995);
    const month = Math.floor(Math.random() * 12 + 1);
    const day = Math.floor(Math.random() * 28 + 1);

    const fetchData = async () => {
      const apikey = process.env.REACT_APP_API_KEY;
      
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?date=${year}-${month}-${day}&api_key=${apikey}`
      )
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((err) => console.log(err, "error"));
      console.log(res);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="topic">beautiful space</div>
      <img src={data.url} alt="" title={data.explanation} />
      <div id="info">
        <div className="info1">{data.date}</div>
        <div className="info2">{data.title}</div>
      </div>
    </>
  );
}

export default App;
