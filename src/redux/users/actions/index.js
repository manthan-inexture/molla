import { ADDUSERDATA, ISUSERSIGNIN, ISNOTUSERSIGNIN } from "../type"

export const adduser = (user) => {
    return {
        type: ADDUSERDATA,
        payload: user
    }
}

export const isSignin = () => {
    return {
        type: ISUSERSIGNIN,
    }
}
export const isNotSignin = () => {
    return {
        type: ISNOTUSERSIGNIN,
    }
}