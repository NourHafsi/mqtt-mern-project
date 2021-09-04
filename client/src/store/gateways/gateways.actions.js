import Axios from "axios";
import {
  LIST_GATEWAYS_LOADING,
  LIST_GATEWAYS_SUCCESS,
  LIST_GATEWAYS_FAILURE,
  DETAILS_GATEWAY_LOADING,
  DETAILS_GATEWAY_SUCCESS,
  DETAILS_GATEWAY_FAILURE,
  DETAILS_MAPS_LOADING,
  DETAILS_MAPS_SUCCESS,
  DETAILS_MAPS_FAILURE,
} from "./gateways.types";

export const getListOfGateways = () => {
  return (dispatch) => {
    dispatch({
      type: LIST_GATEWAYS_LOADING,
    });
    return Axios.get(
      `http://localhost:5000/testeur/listOfGateways?type=gateways`
    )
      .then((response) => {
        dispatch({
          type: LIST_GATEWAYS_SUCCESS,
          payload: response.data,
        });
        return true;
      })
      .catch((error) => {
        dispatch({
          type: LIST_GATEWAYS_FAILURE,
          payload: error.response,
        });
        return false;
      });
  };
};

export const getDetailsOfGateways = (id) => {
  return (dispatch) => {
    dispatch({
      type: DETAILS_GATEWAY_LOADING,
    });
    return Axios.get(
      `http://localhost:5000/testeur/info/${id}?type=gatewayInfo`
    )
      .then((response) => {
        dispatch({
          type: DETAILS_GATEWAY_SUCCESS,
          payload: response.data,
        });
        return true;
      })
      .catch((error) => {
        dispatch({
          type: DETAILS_GATEWAY_FAILURE,
          payload: error.response,
        });
        return false;
      });
  };
};

export const getMapsOfGateway = () => {
  return (dispatch) => {
    dispatch({
      type: DETAILS_MAPS_LOADING,
    });
    return Axios.get(`http://localhost:5000/testeur/maps`)
      .then((response) => {
        dispatch({
          type: DETAILS_MAPS_SUCCESS,
          payload: response.data,
        });
        return true;
      })
      .catch((error) => {
        dispatch({
          type: DETAILS_MAPS_FAILURE,
          payload: error.response,
        });
        return false;
      });
  };
};
