import React, { Component } from 'react';
import style from '../assets/css/Header.module.css';

class Header extends Component {
    render() {
        return (
            <header className={style.header}>
                <ul>
                    <li>Rock</li>
                    <li>Paper</li>
                    <li>Scissors</li>
                </ul>
            </header>
        );
    }
}

export default Header;