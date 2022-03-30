import { combineReducers } from "redux"
import { getuserdata } from "./getuserinfo"
import { usersignin } from "./usersignin"
import fetchReducer from '../../fetchReducer'
const rootreducer = combineReducers({ getuserdata,fetchReducer, usersignin })

export default rootreducer