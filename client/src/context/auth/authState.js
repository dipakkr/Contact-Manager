import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  AUTH_ERROR,
  CLEAR_ERRORS
} from "../types";
import authContext from "./authContext";

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    errors: null
  };

  const [state, dispatch] = useReducer(authContext, initialState);

  // Load User

  // Register User

  // Login User

  // Logout User

  // Clear errors

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        errors: state.errors
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
