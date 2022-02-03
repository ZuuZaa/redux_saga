import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducers";
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from "./saga";

const sagaMIddleWare = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMIddleWare));

sagaMIddleWare.run(rootSaga);