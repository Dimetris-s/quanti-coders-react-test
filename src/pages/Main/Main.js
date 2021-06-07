import React from "react";
import  './Main.scss'
import Button from '../../components/UI/Button/Button'

const Main = props => {
    return (
        <div className="Main">
            <Button text={"Popup"} appearance="gradient" size="lg"/>
        </div>
    )
}

export default Main