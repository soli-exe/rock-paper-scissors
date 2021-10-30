import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';

import './assets/css/Main.css';

import Home from './components/Home';
import GameBoard from './components/GameBoard';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/gamerps' component={GameBoard} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
