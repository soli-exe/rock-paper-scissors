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
                <div className={this.props.isPlaying ? style.scoreBoard : style.scoreBoardDisable }>
                    <span className={style.userScore}>
                        You: 0
                    </span>
                    <span className={style.opponentScore}>
                        Opponent: 0
                    </span>
                </div>
            </header>
        );
    }
}

export default Header;