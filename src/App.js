import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/HomePage";

const HatPage = () => <h1>HATS PAGE...</h1>;

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path='/hats' component={HatPage} />
      </Switch>
    </div>
  );
}

export default App;
