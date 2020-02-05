import React from "react";
import "./App.css";
import { Home } from "./views/Home";
import { PhotoCropper } from "./views/PhotoCropper";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/PhotoCropper" exact component={PhotoCropper}></Route>
        <Route path="/" render={() => <div>404</div>}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
