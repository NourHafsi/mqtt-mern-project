import Axios from "axios";
import {
  REGISTER_USER_LOADING,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
} from "./gateways.types";

export const signupUser = (data) => {
  return (dispatch) => {
    dispatch({
      type: REGISTER_USER_LOADING,
    });
    return Axios.post(
      `http://localhost:5000/auth/register`, data
    )
      .then((response) => {
        dispatch({
          type: REGISTER_USER_SUCCESS,
          payload: response.data,
        });
        return true;
      })
      .catch((error) => {
        dispatch({
          type: REGISTER_USER_FAILURE,
          payload: error.response,
        });
        return false;
      });
  };
};

