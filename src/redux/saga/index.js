import { GET_USERS } from "../action-types";
import { watchUserData } from "./WatchUsersSaga";
import { takeLatest } from "redux-saga/effects";

export function* rootSaga() {
    yield takeLatest(GET_USERS, watchUserData)
}