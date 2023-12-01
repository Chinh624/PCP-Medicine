import React from "react";
import './buttoncart.css';

function buttonClick(props){
    return (
        <>
            <button className="button-Click">{props.text}</button>
        </>
    )
}

export default buttonClick;