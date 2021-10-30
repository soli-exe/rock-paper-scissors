import React, { Component } from 'react';

import style from '../assets/css/GameBoard.module.css';

import qmarkIcon from '../assets/img/Qmark.svg';
import rockIcon from '../assets/img/Rock.svg';
import paperIcon from '../assets/img/Paper.svg';
import scissorsIcon from '../assets/img/Scissors.svg';

import Header from './Header';
import Logos from './Logos';

class GameBoard extends Component {

    constructor(props){
        super(props);
        this.state = {
            userSelectionImgSrc: qmarkIcon,
            userChoice: '',
            oppSelectionImgSrc: qmarkIcon,
            opponentChoice: '',
            statusMsg: "Pick Your Choice",
            oppScore: 0,
            userScore: 0,
        }
    }

    setUserChoiceOnClick = (event) => {
            this.setState({
                statusMsg: "Waiting For Opponents..."
            })

            if (event.target.id === 'Rock'){
                this.setState({
                    userSelectionImgSrc: rockIcon,
                    userChoice: 'rock'
                });
            }
            if (event.target.id === 'Paper'){
                this.setState({
                    userSelectionImgSrc: paperIcon,
                    userChoice: 'paper'
                });
            } 
            if (event.target.id === 'Scissors'){
                this.setState({
                    userSelectionImgSrc: scissorsIcon,
                    userChoice: 'scissors'
                });
            }

            setTimeout(this.setOpponentChoice, 2000);

    }

    setOpponentChoice = () => {
        const randomChoice = Math.floor(Math.random() * 3) + 1;
        switch (randomChoice) {
            case 1:
                this.setState({
                    oppSelectionImgSrc: rockIcon,
                    opponentChoice: 'rock'
                });
                break;
            case 2:
                this.setState({
                    oppSelectionImgSrc: paperIcon,
                    opponentChoice: 'paper'
                });
                break;
            case 3:
                this.setState({
                    oppSelectionImgSrc: scissorsIcon,
                    opponentChoice: 'scissors'
                });
                break;
                default:
                    break;
        }
        this.checkWinner();
    }

    checkWinner = () => {
        const {userChoice, opponentChoice} = this.state;
        const oppositeItems = [
            ['rock', 'paper'],
            ['paper', 'scissors'],
            ['scissors', 'rock'],
            ['rock', 'scissors'],
            ['scissors', 'paper'],
            ['paper', 'rock']
        ]
        if (userChoice === opponentChoice){
            this.setState({
                statusMsg: "...DRAW...",
            });
        }
        oppositeItems.forEach(item => {
            if(item[0] === userChoice && item[1] === opponentChoice){
                if(oppositeItems.indexOf(item) >= 3){
                    this.setState((prevState) => ({
                        statusMsg: "...You Win...",
                        userScore: prevState.userScore + 1
                    }));
                } else if (oppositeItems.indexOf(item) < 3){
                    this.setState((prevState) => ({
                        statusMsg: "...Opponent Win...",
                        oppScore: prevState.oppScore + 1
                    }));
                }
            }
        });

    }
    
    render() {
        return (
            <main>
                <div className='container'>
                    <header className='header'>
                        <Header isPlaying={true} userScore={this.state.userScore} oppScore={this.state.oppScore} />
                    </header>
                    <div className='logosContainer'>
                        <h1 className={style.statusMsg}>{this.state.statusMsg}</h1>
                        <Logos isPlaying={true} clickHandler={this.setUserChoiceOnClick} />
                     </div>
                </div>
                     <div className={style.choiseStatusContainer}>
                         <span className={style.currentSelection}>
                        <img src={this.state.oppSelectionImgSrc} alt='opponent crr selection' />
                         </span>
                         <span className={style.currentSelection}>
                        <img src={this.state.userSelectionImgSrc} alt='user crr selection' />
                         </span>
                </div>
            </main>
        );
    }
}

export default GameBoard;