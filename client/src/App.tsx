import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Link } from "react-router-dom";
import "./App.css";
import { useQuery, useQueryClient } from "@tanstack/react-query";

function App() {
  const [count, setCount] = useState(0);

  const server_increment = () => {
    fetch(`/api/increment/${count}`)
      .then((res) => res.json())
      .then((number: string) => {
        setCount(parseInt(number));
      });
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Link to="/about">Go to about page!</Link>
      <div className="">
        <p>Like any typical react app, we increment the number on a server</p>
        <p>
          Press the button below to increment using this api:{" "}
          <a href={`/api/increment/${count}`}>{`/api/increment/${count}`}</a>
        </p>
        <button onClick={() => server_increment()}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
