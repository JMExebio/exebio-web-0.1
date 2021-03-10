import {
    URL_REQUEST,
    URL_SUCCESS,
    URL_FAILURE,
  } from "../actions/types";
  
  // reducers
  const initialState = {
    loading: false,
    url: [],
    error: "",
  };
  const URLPres = (state = initialState, action) => {
    switch (action.type) {
      case URL_REQUEST: {
        return {
          ...state,
          loading: true,
        };
      }
      case URL_SUCCESS: {
        return {
          ...state,
          loading: false,
          url: action.payload,
          error: "",
        };
      }
      case URL_FAILURE: {
        return {
          ...state,
          loading: false,
          url: [],
          error: action.payload,
        };
      }
  
      default:
        return state;
    }
  };
  
  export default URLPres;