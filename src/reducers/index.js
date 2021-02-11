import { combineReducers } from "redux";
import gamesReducer from "./gamesRducer";
import detailReducer from "./detailReducer";

const rootReducer = combineReducers({
  games: gamesReducer,
  detail: detailReducer,
});

export default rootReducer;
