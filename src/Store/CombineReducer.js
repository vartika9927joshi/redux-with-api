import { combineReducers } from "redux";
import { counterReducer } from "./Reducer";

export const reducer = combineReducers({
    counterReducer : counterReducer
})