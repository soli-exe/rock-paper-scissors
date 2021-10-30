import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import style from '../assets/css/Footer.module.css';

class Footer extends Component {
    render() {
        return (
            <footer className={style.footer}>
                <Link to='/gamerps' className={style.btn}>Start</Link>
            </footer>
        );
    }
}

export default Footer;