import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <h1>
              <Home />
            </h1>
          </Route>
          <Route exact path="/actors">
            <h1>
              <Actors />
            </h1>
          </Route>
          <Route exact path="/directors">
            <h1>
              <Directors />
            </h1>
          </Route>
          <Route path="/movies">
            <h1>
              <Movies />
            </h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
