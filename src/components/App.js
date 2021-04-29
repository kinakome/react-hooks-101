import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import EventForm from "./EventForm";
import Events from "./Events";
import AppContext from "../contexts/AppContext";
// indexは省略できる
import reducer from "../reducers";

const App = () => {
  const initialState = {
    events: [],
    operationLogs: [],
  };
  //第1引数はreducer、第2引数はデフォルトの状態、第3引数は初期化時に呼ぶコールバック
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
      </div>
    </AppContext.Provider>
  );
};

export default App;
