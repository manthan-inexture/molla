import { ISSPINNERAC, ISSPINNERNAC } from "../type";
const initalstate = false
const spinner = (state = initalstate, action) => {
    switch (action.type) {
        case ISSPINNERAC:
            return true
        case ISSPINNERNAC:
            console.log("hlot");
            return false
        default:
            return state
    }
}

export { spinner }