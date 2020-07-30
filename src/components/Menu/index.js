import React from 'react';
import Logo from '../../assets/Logo.png';
import './menu.css';
import Button from '../Button'
//import ButtonLink from '../ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/"> 
            <img className="Logo" src={Logo} alt="JackFlix logo"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>

        </nav>
    );
}

export default Menu; 