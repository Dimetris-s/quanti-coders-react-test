import React from "react";
import  './HelpList.scss'

import HelpItem from './HelpItem/HelpItem'

const HelpList = props => {
    return (
        <ul className="help-list">
            {
                props.helpItems.map((item, id) => (
                    <HelpItem
                        key={id}
                        text={item.text}
                        img={item.img}
                        alt={item.alt}
                        active={item.active}
                    />
                ))
            }
        </ul>
    )
}

export default HelpList