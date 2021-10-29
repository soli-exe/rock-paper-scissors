import React, { Component } from 'react';

import style from '../assets/css/Footer.module.css';

class Footer extends Component {
    render() {
        return (
            <footer className={style.footer}>
                <a href='#' className={style.btn}>Start</a>
            </footer>
        );
    }
}

export default Footer;