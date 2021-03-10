import { COURSES_REQUEST, COURSES_SUCCESS, COURSES_FAILURE } from "./types";
import { db } from "../../components/basedatos/ex-connection";

// Action

export const CoursesRequest = () => {
  return {
    type: COURSES_REQUEST,
  };
};
export const CoursesSuccess = (courses) => {
  return {
    type: COURSES_SUCCESS,
    payload: courses,
  };
};

export const CoursesFailure = (error) => {
  return {
    type: COURSES_FAILURE,
    payload: error,
  };
};

const getCourses = () => {
  return async (dispatch) => {
    dispatch(CoursesRequest());
    db.collection("courses").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      dispatch(CoursesSuccess(docs));
    });
  };
};
export default getCourses;