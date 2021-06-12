import { useReducer } from "react";
import { CLOSE_POPUP, SHOW_POPUP } from "../types";
import { popupContext } from "./popupContext";
import { popupReducer } from "./popupReducer";


const PopupState = ({children}) => {
    const [state, dispatch] = useReducer(popupReducer, {active: false})

    const showModal = () => {
        document.body.classList.add('popup__active')
        dispatch({type: SHOW_POPUP})
    }

    const closeModal = () => {
        dispatch({type: CLOSE_POPUP})
        document.body.classList.remove('popup__active')
    }
    
    return (
        <popupContext.Provider value={{
            active: state.active,
            showModal, closeModal
        }}>
            {children}
        </popupContext.Provider>
    )
}

export default PopupState