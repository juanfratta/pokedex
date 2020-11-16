import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./app.scss";
import Home from "./pages/home";
import PokemonsListContainer from "./pages/pokemonsListContainer";

const App = () => (
  <div className="app">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/all-pokemons" component={PokemonsListContainer} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
