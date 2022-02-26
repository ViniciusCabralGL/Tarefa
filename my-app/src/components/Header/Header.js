import React from 'react';

function Header(props){
    const stylesDiv = {
        background: props.bgColor, 
        height: 70,
        fontSize: "1em",
        flex: 1,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-around',
    }
    const stylesA = {
        textDecoration: 'none',
        color: props.txtColor
    }

    return(
        <div style={stylesDiv}>
            {props.links.map((link) => (
                <a style={stylesA} href={link[1]} key={link[0]}>
                    {link[0]}         
                </a>
            ))}
        </div>
    );
}

export default Header;



