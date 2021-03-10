import {
    THEMES_REQUEST,
    THEMES_SUCCESS,
    THEMES_FAILURE,
  } from "../actions/types";
  
  // reducers
  const initialState = {
    loading: false,
    Themes: [],
    error: "",
  };
  const Themes = (state = initialState, action) => {
    switch (action.type) {
      case THEMES_REQUEST: {
        return {
          ...state,
          loading: true,
        };
      }
      case THEMES_SUCCESS: {
        return {
          ...state,
          loading: false,
          Themes: action.payload,
          error: "",
        };
      }
      case THEMES_FAILURE: {
        return {
          ...state,
          loading: false,
          Themes: [],
          error: action.payload,
        };
      }
  
      default:
        return state;
    }
  };
  
  export default Themes;
  