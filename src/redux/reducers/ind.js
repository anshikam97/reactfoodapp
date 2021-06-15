import { combineReducers } from "redux";
import { foodReducer, selectedfoodReducer, removefoodReducer } from "./foodReducer";

const reducers = combineReducers({
    allFoods : foodReducer,
    allCart : selectedfoodReducer,
});

export default reducers;