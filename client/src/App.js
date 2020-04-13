import React from 'react';
import {Switch, Route} from 'react-router-dom'

import './App.css';

import HomePage from './Pages/home.page';

function App() {
  return (
    <div className="App">
      <HomePage />

      <Switch>
          
          <Route exact path='/' component={HomePage}/>
          {/* <Route exact path='/addItem' component={}/> */}
      </Switch>
    </div>
  );
}

export default App;
