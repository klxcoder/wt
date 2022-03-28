import { combineReducers } from "redux";
import apiReducer from "./reducer";

const rootReducer = combineReducers({
    api: apiReducer
})

export default rootReducer;