import { combineReducers } from "redux";
import signInReducer from "./signInReducer";
import signUpReducer from "./signUpReducer";
import userReducer from "./userReducer";

export default combineReducers({
  signInData: signInReducer,
  signUpData: signUpReducer,
  usersData: userReducer
});
