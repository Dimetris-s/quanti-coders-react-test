import React from "react";
import  './Popup.scss'

import Backdrop from '../Backdrop/Backdrop'

const Popup = props => {
    return (
        <div className="Popup">
            <Backdrop/>
            <div className="Popup__body">
                <span className="Popup__close"/>
                {props.children}
            </div>
        </div>
    )
}

export default Popup