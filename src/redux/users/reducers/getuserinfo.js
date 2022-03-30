import { ADDUSERDATA } from "../type";
const initalstate = {};
const getuserdata = (state = initalstate, action) => {
    switch (action.type) {
        case ADDUSERDATA:
            return action.payload
        default:
            return state
    }
}

export  {getuserdata};