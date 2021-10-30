import React, { Component } from 'react';
import style from '../assets/css/Header.module.css';

class Header extends Component {
    render() {
        const {isPlaying, userScore, oppScore} = this.props;
        return (
            <header className={style.header}>
                <ul>
                    <li>Rock</li>
                    <li>Paper</li>
                    <li>Scissors</li>
                </ul>
                <div className={isPlaying ? style.scoreBoard : style.scoreBoardDisable }>
                    <span className={style.userScore}>
                        You: {userScore}
                    </span>
                    <span className={style.opponentScore}>
                        Opponent: {oppScore}
                    </span>
                </div>
            </header>
        );
    }
}

export default Header;