import {
    COURSES_REQUEST,
    COURSES_SUCCESS,
    COURSES_FAILURE,
  } from "../actions/types";
  
  // reducers
  const initialState = {
    loading: false,
    Courses: [],
    error: "",
  };
  const Courses = (state = initialState, action) => {
    switch (action.type) {
      case COURSES_REQUEST: {
        return {
          ...state,
          loading: true,
        };
      }
      case COURSES_SUCCESS: {
        return {
          ...state,
          loading: false,
          Courses: action.payload,
          error: "",
        };
      }
      case COURSES_FAILURE: {
        return {
          ...state,
          loading: false,
          Courses: [],
          error: action.payload,
        };
      }
  
      default:
        return state;
    }
  };
  
  export default Courses;