import { combineReducers } from "redux";
import gamesReducer from "./gamesRducer";

const rootReducer = combineReducers({
  games: gamesReducer,
});

export default rootReducer;
