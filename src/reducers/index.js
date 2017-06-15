import { combineReducers } from "redux";

//Reducers
import SlidesReducer from "./SlidesReducer";

export default combineReducers({
    slides: SlidesReducer
});