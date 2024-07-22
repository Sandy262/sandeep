import { combineReducers,createStore } from "redux";
import counterReducer from "./CounterReducer";
import todoListReducer from "./TodoListReducer";
var reducer=combineReducers({counterR:counterReducer,todoListR:todoListReducer})
var store=new createStore(reducer)
export default store