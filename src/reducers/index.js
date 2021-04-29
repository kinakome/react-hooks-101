import { combineReducers } from "redux";
import events from "./events";
import operationLogs from "./operationLogs";

// rootReducerをオブジェクトの形でエクスポートする
export default combineReducers({ events, operationLogs });
