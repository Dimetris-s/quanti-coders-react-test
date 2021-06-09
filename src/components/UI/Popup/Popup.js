import React from "react";
import  './Popup.scss'


const Popup = props => {
    return (
        <div className="Popup active">
            <div className="Popup__body">
                <div className="Popup__content">
                    <span className="Popup__close"/>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Popup