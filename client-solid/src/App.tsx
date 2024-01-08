import { createSignal } from "solid-js";
import solidLogo from "./assets/solid.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = createSignal(0);

  const server_increment = () => {
    fetch(`/api/increment/${count()}`)
      .then((res) => res.json())
      .then((number: string) => {
        setCount(parseInt(number));
      });
  };

  return (
    <div class="flex w-screen justify-center space-y-3">
      <div class="flex h-screen flex-col content-center w-1/2 ">
        <div class="flex  flex-row h-12 justify-center space-x-1 ">
          <a href="https://vitejs.dev" class="flex w-12 h-12" target="_blank">
            <img src={viteLogo} alt="Vite logo" />
          </a>
          <a href="https://solidjs.com" class="flex w-12 h-12" target="_blank">
            <img src={solidLogo} alt="Solid logo" />
          </a>
        </div>
        <div class="flex justify-center flex-col space-y-3">
          <h1>Vite + Solid</h1>
          <p>Like any typical web app, we increment the number on a server</p>
          <p>
            Press the button below to increment using this api:{" "}
            <a
              href={`/api/increment/${count()}`}
            >{`/api/increment/${count()}`}</a>
          </p>
          <button class="self-center" onClick={() => server_increment()}>
            count is {count()}
          </button>
          <a href="/about">Go to the about page to test the router!</a>
        </div>
      </div>
    </div>
  );
}

// <h1>Vite + Solid</h1>

export default App;
