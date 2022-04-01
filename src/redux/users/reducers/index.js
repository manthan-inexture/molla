import { combineReducers } from "redux"
import { getuserdata } from "./getuserinfo"
import { spinner } from "./spinner"
import fetchReducer from '../../fetchReducer'
const rootreducer = combineReducers({ getuserdata, fetchReducer, spinner })

export default rootreducer