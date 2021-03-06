import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./Pages/Home.page";
import AddItem from "./Forms/AddItem.Form";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/addItem" component={AddItem} />
      </Switch>
    </div>
  );
}

export default App;
