import { applyMiddleware, createStore } from "redux";
import rootReducer from "./redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./redux/rootSaga";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store;