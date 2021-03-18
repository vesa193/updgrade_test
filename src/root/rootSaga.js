import { all } from "redux-saga/effects";
import { watchInitSaga } from "./sagas";

export default function* rootSaga() {
  yield all([
    watchInitSaga(),
  ])
}