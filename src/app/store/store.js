import { createStore } from "react-redux";
import todoManagerReducer from "../reducer/todoManagerReducer";

export const store = createStore(todoManagerReducer)