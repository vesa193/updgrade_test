import { combineReducers } from "redux";
import extraServicesReducer from "../views/ExtraServices/reducer";
import commonReducer from "./reducer";

export default combineReducers({
	common: commonReducer,
	extraServices: extraServicesReducer
})
