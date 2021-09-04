import {
  REGISTER_USER_LOADING,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
} from "./auth.types";

const initialState = {
  currentUser: {},
  success: null,
  loading: null,
  failure: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        success: true,
        loading: false,
        failure: false,
      };
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        currentUser: {},
        success: false,
        loading: false,
        failure: true,
      };
    default:
      return state;
  }
};

export default authReducer;
