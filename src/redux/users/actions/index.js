import { ADDUSERDATA, ISSPINNERAC, ISSPINNERNAC } from "../type"

export const adduser = (user) => {
    return {
        type: ADDUSERDATA,
        payload: user
    }
}

export const spinneractive = () => {
    return {
        type: ISSPINNERAC,
    }
}
export const spinnernotactive = () => {
    return {
        type: ISSPINNERNAC,
    }
}
