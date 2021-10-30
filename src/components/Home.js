import React, { Component } from 'react';

import Header from './Header';
import Logos from './Logos';
import Footer from './Footer';

class Home extends Component {
    render() {
        return (
            <div className='container'>
            <header className='header'>
              <Header isPlaying={false} />
            </header>
            <div className='logosContainer'>
              <Logos isPlaying={false}/>
            </div>
            <footer className='footer'>
              <Footer />
            </footer>
          </div>
        );
    }
}

export default Home;