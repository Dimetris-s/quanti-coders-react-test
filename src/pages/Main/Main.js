import React, { useContext } from "react";
import  './Main.scss'
import Button from '../../components/UI/Button/Button'
import { popupContext } from "../../context/popup/popupContext";

const Main = () => {
    const {showModal} = useContext(popupContext)
    return (
        <div className="Main">
            <Button onClick={() => showModal()} text={"Popup"} appearance="gradient" size="lg"/>
        </div>
    )
}

export default Main