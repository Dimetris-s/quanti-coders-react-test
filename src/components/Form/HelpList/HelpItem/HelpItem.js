import React from "react";
import  './HelpItem.scss'

const HelpItem = props => {
    return (
        <li className="help-item">
            <div className="help-item__img">
                <img src={props.img} alt={props.alt} />
            </div>
            <div className="help-item__text">{props.text}</div>
        </li>
    )
}

export default HelpItem