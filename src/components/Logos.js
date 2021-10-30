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
                    <li onClick={this.props.clickHandler} id='Rock' className={this.props.isPlaying ? [style.clickableItem, style.item].join(" ") : style.item}>
                        <img id='Rock' className={style.logo} src={rockIcon} alt='rock icon' />
                    </li>
                    <li onClick={this.props.clickHandler} id='Paper' className={this.props.isPlaying ? [style.clickableItem, style.item].join(" ") : style.item}>
                        <img id='Paper' className={style.logo} src={paperIcon} alt='paper icon' />
                    </li>
                    <li onClick={this.props.clickHandler} id='Scissors' className={this.props.isPlaying ? [style.clickableItem, style.item].join(" ") : style.item}>
                        <img id='Scissors' className={style.logo} src={scissorsIcon} alt='scissors icon' />
                    </li>
                </ul>
            </div>
        );
    }
}

export default Logos;