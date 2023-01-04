import { combineReducers } from "redux"; 
import { userReducer } from "./userReducer";


// helps to create reducer functions that handle actions and update the state
const rootReducer = combineReducers({
    // add reducers here
    user: userReducer,
});


export default rootReducer;