import {reducers} from "./Action_Reducers"
import {combineReducers} from "redux"
export const RootReducers=combineReducers({
   ourState:reducers
})