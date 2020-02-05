import React from "react";
import "./App.css";
import { Home } from "./views/Home";
import { PhotoCropper } from "./views/PhotoCropper";
import { AppBar, Toolbar, Tab, Tabs } from "@material-ui/core";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppBar position="static">
          <Toolbar>
            <Tabs>
              <Tab label="Home" to="/" component={Link} />
              <Tab label="PhotoCropper" to="/PhotoCropper" component={Link} />
            </Tabs>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/PhotoCropper" exact component={PhotoCropper}></Route>
          <Route path="/" render={() => <div>404</div>}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
