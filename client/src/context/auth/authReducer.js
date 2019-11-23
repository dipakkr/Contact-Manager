import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  AUTH_ERROR,
  CLEAR_ERRORS,
  LOGOUT
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload
      };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        loading: false,
        isAuthenticated: true
      };

    case AUTH_ERROR:
    case REGISTER_FAIL:
    case LOGIN_SUCCESS:
    case LOGOUT:
      localStorage.removeItem("token");
      // -------------- CONSOLE ---------------
      console.log({
        ...state,
        error: action.payload,
        isAuthenticated: false,
        loading: false,
        user: null,
        token: null
      });
      return {
        ...state,
        error: action.payload,
        isAuthenticated: false,
        loading: false,
        user: null,
        token: null
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      };
    default:
  }
};
