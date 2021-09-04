import Axios from "axios";
import {
  LIST_NOEUDS_LOADING,
  LIST_NOEUDS_SUCCESS,
  LIST_NOEUDS_FAILURE,
  DETAILS_NOEUD_LOADING,
  DETAILS_NOEUD_SUCCESS,
  DETAILS_NOEUD_FAILURE,
} from "./noeuds.types";

export const getListOfNoeuds = () => {
  return (dispatch) => {
    dispatch({
      type: LIST_NOEUDS_LOADING,
    });
    return Axios.get(`http://localhost:5000/testeur/list`)
      .then((response) => {
        dispatch({
          type: LIST_NOEUDS_SUCCESS,
          payload: response.data,
        });
        return true;
      })
      .catch((error) => {
        dispatch({
          type: LIST_NOEUDS_FAILURE,
          payload: error.response,
        });
        return false;
      });
  };
};

export const getDetailsOfNoeuds = (id, type) => {
  return (dispatch) => {
    dispatch({
      type: DETAILS_NOEUD_LOADING,
    });
    return Axios.get(`http://localhost:5000/testeur/info/${id}?type=noeudInfo`, {
      type
    })
      .then((response) => {
        dispatch({
          type: DETAILS_NOEUD_SUCCESS,
          payload: response.data,
        });
        return true;
      })
      .catch((error) => {
        dispatch({
          type: DETAILS_NOEUD_FAILURE,
          payload: error.response,
        });
        return false;
      });
  };
};
