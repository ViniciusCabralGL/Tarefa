import React from 'react';

function Card(props){
    const stylesDiv = {
        height: "100%",
        width: "100%",
        alignItems: 'center',
        justifyContent: 'space-around',
        display: "inline-block",
        flex: 1,
        backgroundColor: props.bgColor,
    }

    const stylesImgCard = {
        margin: 30,
        height: "300px",
        width: "30%",

    }

    return(
        <div style={stylesDiv}>
            {props.img.map((image) => (
               <img style={stylesImgCard} src={require("../images/"+image)}></img>
            ))}
        </div>
    );
}

export default Card;



