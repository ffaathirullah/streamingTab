import { combineReducers } from "redux";
import { registerReducer } from "./auth";
import { globalReducer } from "./global";
import { favoriteReducer } from "./favorite";

const reducer = combineReducers({
  registerReducer,
  globalReducer,
  favoriteReducer,
});

export default reducer;
