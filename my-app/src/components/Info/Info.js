import React from 'react';

function Info(props){
    const stylesDiv = {
        textAlign: 'justify',
        textJustify: 'inter-word',
        color: props.textColor,
        backgroundColor: props.bgColor,
        flex: 1,
        padding: 20,
    }
    const stylesP = {
        fontSize: 14
    }
   

    return(
        <>
           <div style={stylesDiv}>
               <h3>{props.textTitle}:</h3>
               <p style={stylesP}>{props.infoText}</p>
           </div>
        </>
    );
}

export default Info;



