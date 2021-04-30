import { all, call } from "redux-saga/effects";
import { shopSagas } from "./shop/shop.sagas";
import { userSagas } from "./user/user.sagas";
import { cartSagas } from "./cart/cart.sagas";

export default function* () {
  //all function allow us to run all functions in the array in paralell (each task stream)
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
