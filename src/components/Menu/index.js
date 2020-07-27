import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={Logo} alt="Youfly logo" />
            </a>

            <ButtonLink className="ButtonLink" href="/" />
        </nav>
    );
}

export default Menu;