import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { onClean } from "./cartRedux";
import { addFavorite, clearFavorite } from "./favoriteRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest
      .post("auth/login", user)
      .then((res) => res)
      .catch((err) => {
        return { error: "Error de login" };
      });
    console.log(res);
    if (res.error === "Error de login") return alert("User or password is invalid");
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const onCleanCart = (dispatch) => {
  dispatch(onClean());
};

export const addFavorites = (dispatch, product) => {
  dispatch(addFavorite(product));
};
export const clearFavorites = (dispatch, id) => {
  dispatch(clearFavorite(id));
};
