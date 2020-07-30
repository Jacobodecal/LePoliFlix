import React from 'react';

function ButtonLink(props) {
    //props => { className : " o q alguem passar" , href: ""}
    console.log(props);
    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    );
}

export default ButtonLink; 

//Crtl + D para selecionar varios com o mesmo nome