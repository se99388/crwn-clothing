import { put, takeLatest, all, call } from "redux-saga/effects";

import UserActionTypes from "../user/user.types";
import { clearCart } from "./cart.actions";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  //these functions will be part of the saga middleware and will run in the begining. Basically it adds all listeners to saga middleware
  yield all([call(onSignOutSuccess)]);
}
