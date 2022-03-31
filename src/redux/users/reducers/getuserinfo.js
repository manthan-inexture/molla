import { ADDUSERDATA } from "../type";
const initalstate = {
    alluser: [],
};
const getuserdata = (state = initalstate, action) => {
    switch (action.type) {
        case ADDUSERDATA:

            return {
                ...state,
                alluser: [...state.alluser, action.payload]
            }
        default:
            return state
    }
}

export  {getuserdata};