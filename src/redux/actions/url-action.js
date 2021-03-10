import { URL_REQUEST, URL_SUCCESS, URL_FAILURE } from "./types";
import { db } from "../../components/basedatos/ex-connection";

// Action

export const urlRequest = () => {
  return {
    type: URL_REQUEST,
  };
};
export const urlSuccess = (url) => {
  return {
    type: URL_SUCCESS,
    payload: url,
  };
};

export const urlFailure = (error) => {
  return {
    type: URL_FAILURE,
    payload: error,
  };
};

const getURL = () => {
  return async (dispatch) => {
    dispatch(urlRequest());
    db.collection("urls").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      dispatch(urlSuccess(docs));
    });
  };
};
export default getURL;
