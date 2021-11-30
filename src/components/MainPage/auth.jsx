import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, AUTH_API_LOGIN } from "../../redux/helpers";
import jwt_decode from "jwt-decode";

const authContext = createContext();

const INIT_STATE = {
  user: null,
  loading: false,
  success: false,
  errorMessage: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        errorMessage: null,
        user: action.payload,
      };
    case ACTIONS.AUTH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ACTIONS.AUTH_ERROR:
      return {
        ...state,
        loading: false,
        user: null,
        success: false,
        errorMessage: action.payload,
      };
    case ACTIONS.CLEAR_AUTH_STATE:
      return {
        ...state,
        loading: false,
        success: false,
        errorMessage: null,
      };

    case ACTIONS.AUTH_LOGOUT:
      return {
        user: null,
        loading: false,
        success: false,
        errorMessage: null,
      };

    default:
      return state;
  }
};

export const useAuth = () => {
  return useContext(authContext);
};

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const registerUser = async (newUser) => {
    // const response = await fetch(
    //   "https://api.jamskills.ml/api/testingusers/registration",
    //   {
    //     method: "POST",
    //     headers: {
    //       authorization: "Bearer",
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ name: "Андрей" }),
    //   }
    // );
    // if (!response.ok) {
    //   alert("Запрос не удался");
    //   return;
    // }
    // const data = await response.json();
    // console.log(data);
    // c//================================================================================================================================
    // let user = {
    //   name: "John",
    //   surname: "Smith",
    // };
    // let response = await fetch(
    //   "https://api.jamskills.ml/api/testingusers/registration",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: console.log(JSON.stringify(newUser)),
    //   }
    // );
    //==============================================================================================================================
    // let result = await response.json();
    // console.log(result);
    // try {
    //   dispatch({
    //     type: ACTIONS.AUTH_LOADING,
    //   });
    //   const res = await axios.post(AUTH_API_REG, newUser);
    //   if (res.status >= 200 && res.status <= 299) {
    //     dispatch({
    //       type: ACTIONS.AUTH_SUCCESS,
    //       payload: null,
    //     });
    //   } else {
    //     console.log("worked error");
    //     dispatch({
    //       type: ACTIONS.AUTH_ERROR,
    //       payload: res.data.message,
    //     });
    //   }
    // } catch (error) {
    //   dispatch({
    //     type: ACTIONS.AUTH_ERROR,
    //     payload: error.response.data.message,
    //   });
    // }
  };

  const loginUser = async (user) => {
    console.log(user);
    try {
      dispatch({ type: ACTIONS.AUTH_LOADING });
      const res = await axios.post(AUTH_API_LOGIN, user);
      const decoded = jwt_decode(res.data.token);
      const decodedUser = {
        email: decoded.id,
        id: decoded.email,
        exp: decoded.exp,
        iat: decoded.iat,
      };
      localStorage.setItem("token", res.data.token);
      dispatch({
        type: ACTIONS.AUTH_SUCCESS,
        payload: decodedUser,
      });
    } catch (error) {
      dispatch({
        type: ACTIONS.AUTH_ERROR,
        payload: error.response.data.message,
      });
    }
  };

  const checkAuth = () => {
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    if (Date.now() > token.exp * 1000) {
      return;
    }
    dispatch({
      type: ACTIONS.AUTH_SUCCESS,
      payload: {
        email: decoded.id,
        id: decoded.email,
        exp: decoded.exp,
        iat: decoded.iat,
      },
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    dispatch({
      type: ACTIONS.AUTH_LOGOUT,
    });
  };

  const clearState = () => {
    dispatch({
      type: ACTIONS.CLEAR_AUTH_STATE,
    });
  };

  const value = {
    registerUser,
    loginUser,
    user: state.user,
    loading: state.loading,
    errorMessage: state.errorMessage,
    success: state.success,
    clearState,
    checkAuth,
    logout,
  };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
