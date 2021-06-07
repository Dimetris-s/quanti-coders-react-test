import React from "react";
import Popup from "../../components/UI/Popup/Popup";
import  './Layout.scss'


const Layout = props => {
    return (
        <div className="Layout">
            <Popup>
                
            </Popup>
            
            <main className="main">
                {props.children}
            </main>
        </div>
    )
}

export default Layout