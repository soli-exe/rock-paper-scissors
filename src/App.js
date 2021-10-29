import React, { Component } from 'react';
import './assets/css/Main.css';
import style from './assets/css/App.module.css';

import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className={style.container}>
        <header className={style.header}>
          <Header />
        </header>
      </div>
    );
  }
}

export default App;
