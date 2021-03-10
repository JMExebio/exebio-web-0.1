import {
    THEORY_REQUEST,
    THEORY_SUCCESS,
    THEORY_FAILURE,
  } from "../actions/types";
  
  // reducers
  const initialState = {
    loading: false,
    Theory: [],
    error: "",
  };
  const Theory = (state = initialState, action) => {
    switch (action.type) {
      case THEORY_REQUEST: {
        return {
          ...state,
          loading: true,
        };
      }
      case THEORY_SUCCESS: {
        return {
          ...state,
          loading: false,
          Theory: action.payload,
          error: "",
        };
      }
      case THEORY_FAILURE: {
        return {
          ...state,
          loading: false,
          Theory: [],
          error: action.payload,
        };
      }
  
      default:
        return state;
    }
  };
  
  export default Theory;