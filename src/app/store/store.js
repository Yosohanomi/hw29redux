import { createStore } from "redux";
import todoManagerReducer from "../reducer/todoManagerReducer";

export const store = createStore(todoManagerReducer)