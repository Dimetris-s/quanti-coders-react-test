import { CLOSE_POPUP, SHOW_POPUP } from "../types"


export function popupReducer(state, action) {
    switch (action.type) {
        case SHOW_POPUP:
            return {
                ...state,
                active: true
            }
        case CLOSE_POPUP:
            return {
                ...state,
                active: false
            }
        default:
            return state
    }   
}