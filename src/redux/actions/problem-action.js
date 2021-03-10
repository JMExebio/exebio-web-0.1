import { PROBLEM_REQUEST, PROBLEM_SUCCESS, PROBLEM_FAILURE } from "./types";
import { db } from "../../components/basedatos/ex-connection";

// Action

export const problemRequest = () => {
  return {
    type: PROBLEM_REQUEST,
  };
};
export const problemSuccess = (problem) => {
  return {
    type: PROBLEM_SUCCESS,
    payload: problem,
  };
};

export const problemFailure = (error) => {
  return {
    type: PROBLEM_FAILURE,
    payload: error,
  };
};

const getProblem = () => {
  return async (dispatch) => {
    dispatch(problemRequest());
    db.collection("problems").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      dispatch(problemSuccess(docs));
    });
  };
};
export default getProblem;
