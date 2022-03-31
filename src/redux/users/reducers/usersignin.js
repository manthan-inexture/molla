import { ISUSERSIGNIN, ISNOTUSERSIGNIN } from "../type";
const initalstate = {
    isauth: false,
};
const usersignin = (state = initalstate, action) => {
    switch (action.type) {
        case ISUSERSIGNIN:
            return {
                ...state,
                isauth: true,
            }
        case ISNOTUSERSIGNIN:
            console.log("hlot");
            return {
                ...state,
                isauth: false,
            }
        default:
            return state
    }
}

export { usersignin }