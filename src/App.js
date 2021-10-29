import React, { Component } from 'react';
import './assets/css/Main.css';
import style from './assets/css/App.module.css';

import Header from './components/Header';
import Logos from './components/Logos';

class App extends Component {
  render() {
    return (
      <div className={style.container}>
        <header className={style.header}>
          <Header />
        </header>
        <div className={style.logosContainer}>
          <Logos />
        </div>
      </div>
    );
  }
}

export default App;
