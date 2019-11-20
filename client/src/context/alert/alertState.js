import React, { useState, useReducer } from "react";
import AlertContext from "./alertContext";
import alertReducer from "./alertReducer";
import uuid from "uuid";

import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = props => {
  const initialState = [];

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // SET Alert
  const setAlert = (msg, type) => {
    const id = uuid.v4();

    dispatch({
      type: SET_ALERT,
      payload: { msg, type, id }
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 4000);
  };

  return (
    <AlertContext.Provider value={{ alerts: state, setAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
