import React from 'react';
import Background from '../images/bg.jpg';

function Main(props){
    const stylesDiv = {
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: "100%",
        height: 900,
        backgroundImage: `url(${Background})`,
        /*display: "inline-block",*/
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin:'auto',
        fontSize: 72,
        color: 'white',
    }
   

    return(
        <>
            <div style={stylesDiv}>
                <p>{props.mainText}</p>
            </div>
        </>
    );
}

export default Main;



