import { combineReducers } from "redux";
import displayCard from "./passCard";

const rootReducer = combineReducers({
  card: displayCard,
});

export default rootReducer;
