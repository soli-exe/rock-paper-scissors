import React, { Component } from 'react';

import style from '../assets/css/Logos.module.css';

import rockIcon from '../assets/img/Rock.svg';
import paperIcon from '../assets/img/Paper.svg';
import scissorsIcon from '../assets/img/Scissors.svg';

class Logos extends Component {
    render() {
        return (
            <div>
                <ul className={style.logosContainer}>
                    <li className={style.item}>
                        <img className={style.logo} src={rockIcon} alt='rock icon' />
                    </li>
                    <li className={style.item}>
                        <img className={style.logo} src={paperIcon} alt='paper icon' />
                    </li>
                    <li className={style.item}>
                        <img className={style.logo} src={scissorsIcon} alt='scissors icon' />
                    </li>
                </ul>
            </div>
        );
    }
}

export default Logos;