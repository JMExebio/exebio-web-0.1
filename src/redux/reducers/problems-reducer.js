import {
    PROBLEM_REQUEST,
    PROBLEM_SUCCESS,
    PROBLEM_FAILURE,
  } from "../actions/types";
  
  // reducers
  const initialState = {
    loading: false,
    Problem: [],
    error: "",
  };
  const Problems = (state = initialState, action) => {
    switch (action.type) {
      case PROBLEM_REQUEST: {
        return {
          ...state,
          loading: true,
        };
      }
      case PROBLEM_SUCCESS: {
        return {
          ...state,
          loading: false,
          Problem: action.payload,
          error: "",
        };
      }
      case PROBLEM_FAILURE: {
        return {
          ...state,
          loading: false,
          Problem: [],
          error: action.payload,
        };
      }
  
      default:
        return state;
    }
  };
  
  export default Problems;