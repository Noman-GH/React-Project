import { combineReducers } from "redux";
import todoReducer from "../todo/todo.reducer";
import userReducer from "../user/user.reducer";

export default combineReducers({
    Riyad: todoReducer,
    userReducer,
});
