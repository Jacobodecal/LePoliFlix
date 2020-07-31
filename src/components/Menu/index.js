import React from 'react';
import Logo from '../../assets/Logo.png';
import './menu.css';
import Button from '../Button'
import {Link} from 'react-router-dom';
//import ButtonLink from '../ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/"> 
            <img className="Logo" src={Logo} alt="JackFlix logo"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>

        </nav>
    );
}

//Crtl D pra trocar varias palavras iguais juntas

export default Menu; 