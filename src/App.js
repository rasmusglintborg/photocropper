import React, { useState, useEffect } from "react";
import "./App.css";
import { Home } from "./views/Home";
import { PhotoCropper } from "./views/PhotoCropper";
import { AppBar, Toolbar, Tab, Tabs } from "@material-ui/core";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

function App() {
  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (event, tabValue) => {
    setTabValue(tabValue);
  };
  function setActiveTab() {
    let page = window.location.pathname;
    switch (page) {
      case "/":
        setTabValue(0);
        break;
      case "/PhotoCropper":
        setTabValue(1);
        break;
      default:
        setTabValue(0);
    }
  }
  useEffect(() => {
    setActiveTab();
  });
  return (
    <div>
      <BrowserRouter>
        <AppBar position="static">
          <Toolbar>
            <Tabs value={tabValue} onChange={handleTabChange}>
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
