import React, { useContext } from "react";
import { popupContext } from "../../../context/popup/popupContext";
import  './Popup.scss'


const Popup = props => {
    const {active, closeModal} = useContext(popupContext)
    return (
        <div className={active ? "Popup active" : "Popup"}>
            <div className="Popup__body">
                <div className="Popup__content">
                    <span onClick={() => closeModal()} className="Popup__close"/>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Popup