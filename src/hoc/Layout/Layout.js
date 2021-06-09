import React from "react";
import Form from "../../components/Form/Form";
import Popup from "../../components/UI/Popup/Popup";
import  './Layout.scss'


const Layout = props => {
    return (
        <div className="Layout">
            <Popup>
                <Form/>
            </Popup>
            
            <main className="main">
                {props.children}
            </main>
        </div>
    )
}

export default Layout