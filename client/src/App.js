import React from 'react';
import {Switch, Route} from 'react-router-dom'

import './App.css';

import HomePage from './Pages/home.page';
import AddItem from './Components/AddItem.Form';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/addItem' component={AddItem}/>
      </Switch>
    </div>
  );
}

export default App;
