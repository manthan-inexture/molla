import { combineReducers } from "redux"
import { getuserdata } from "./getuserinfo"
import { usersignin } from "./usersignin"

const rootreducer = combineReducers({ getuserdata, usersignin })

export default rootreducer