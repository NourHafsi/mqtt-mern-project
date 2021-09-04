import {
  LIST_NOEUDS_FAILURE,
  LIST_NOEUDS_LOADING,
  LIST_NOEUDS_SUCCESS,
  DETAILS_NOEUD_LOADING,
  DETAILS_NOEUD_SUCCESS,
  DETAILS_NOEUD_FAILURE,
} from "./noeuds.types";

const initialState = {
  listNoeuds: [],
  success: null,
  loading: null,
  failure: null,
  one: {},
};

const noeudsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_NOEUDS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LIST_NOEUDS_SUCCESS:
      return {
        ...state,
        listNoeuds: action.payload,
        success: true,
        loading: false,
        failure: false,
      };
    case LIST_NOEUDS_FAILURE:
      return {
        ...state,
        listNoeuds: [],
        success: false,
        loading: false,
        failure: true,
      };
    case DETAILS_NOEUD_LOADING:
      return {
        ...state,
        loading: true,
      };
    case DETAILS_NOEUD_SUCCESS:
      return {
        ...state,
        one: action.payload,
        success: true,
        loading: false,
        failure: false,
      };
    case DETAILS_NOEUD_FAILURE:
      return {
        ...state,
        success: false,
        loading: false,
        failure: true,
      };
    default:
      return state;
  }
};

export default noeudsReducer;
