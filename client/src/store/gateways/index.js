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

const initialState = {
  listGateways: [],
  one: {},
  maps: {},
  success: null,
  loading: null,
  failure: null,
};

const gatewaysReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_GATEWAYS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LIST_GATEWAYS_SUCCESS:
      return {
        ...state,
        listGateways: action.payload,
        success: true,
        loading: false,
        failure: false,
      };
    case LIST_GATEWAYS_FAILURE:
      return {
        ...state,
        listGateways: [],
        success: false,
        loading: false,
        failure: true,
      };
    case DETAILS_GATEWAY_LOADING:
      return {
        ...state,
        loading: true,
      };
    case DETAILS_GATEWAY_SUCCESS:
      return {
        ...state,
        one: action.payload,
        success: true,
        loading: false,
        failure: false,
      };
    case DETAILS_GATEWAY_FAILURE:
      return {
        ...state,
        success: false,
        loading: false,
        failure: true,
      };
    case DETAILS_MAPS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case DETAILS_MAPS_SUCCESS:
      return {
        ...state,
        maps: action.payload,
        success: true,
        loading: false,
        failure: false,
      };
    case DETAILS_MAPS_FAILURE:
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

export default gatewaysReducer;
