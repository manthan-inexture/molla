import { createStore } from "redux"
import rootreducer from './users/reducers/index'

const store = createStore(rootreducer)

export default store;