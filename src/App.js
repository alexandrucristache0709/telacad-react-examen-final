import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Page404 from "./pages/Page404/Page404";
import UserList from "./pages/UserList/UserList";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/people" component={UserList}/>
        <Route path="*" component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
