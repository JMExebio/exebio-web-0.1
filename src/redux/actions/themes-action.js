import { THEMES_REQUEST, THEMES_SUCCESS, THEMES_FAILURE } from "./types";
import { db } from "../../components/basedatos/ex-connection";

// Action

export const ThemesRequest = () => {
  return {
    type: THEMES_REQUEST,
  };
};
export const ThemesSuccess = (themes) => {
  return {
    type: THEMES_SUCCESS,
    payload: themes,
  };
};

export const ThemesFailure = (error) => {
  return {
    type: THEMES_FAILURE,
    payload: error,
  };
};

const getThemes = () => {
  return async (dispatch) => {
    dispatch(ThemesRequest());
    db.collection("themes").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      dispatch(ThemesSuccess(docs));
    });
  };
};
export default getThemes;