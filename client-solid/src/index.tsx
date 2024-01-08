/* @refresh reload */
import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";

import "./index.css";
import App from "./App";

const root = document.getElementById("root");

// render(() => <App />, root!);

const About = () => {
    return (
        <div class="flex text-2xl justify-center">
            <p>About page</p>
        </div>
    )
}

render(
  () => (
    <Router>
      <Route path="/" component={App} />
      <Route path="/about" component={About}/>
    </Router>
  ),
  root!
);
