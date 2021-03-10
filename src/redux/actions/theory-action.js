import { THEORY_REQUEST, THEORY_SUCCESS, THEORY_FAILURE } from "./types";
import { db } from "../../components/basedatos/ex-connection";

// Action

export const TheoryRequest = () => {
  return {
    type: THEORY_REQUEST,
  };
};
export const TheorySuccess = (themes) => {
  return {
    type: THEORY_SUCCESS,
    payload: themes,
  };
};

export const TheoryFailure = (error) => {
  return {
    type: THEORY_FAILURE,
    payload: error,
  };
};

const getTheory = () => {
  return async (dispatch) => {
    dispatch(TheoryRequest());
    db.collection("theory")
    .onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      dispatch(TheorySuccess(docs));
    });
  };
};
export default getTheory;