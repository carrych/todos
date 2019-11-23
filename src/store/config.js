import {createStore, applyMiddleware, combineReducers} from "redux";
import * as allReducers from "../features/allReducers";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../features/rootSaga";
//import rootSaga from "../features/rootSaga;

const rootReducer = combineReducers(allReducers);

const sagaMiddleware = createSagaMiddleware();

const logMiddleware = () => next => action => {
    console.log(action.type);
    return next(action);
};

const stringMiddleware = () => next => action => {
    if (typeof action === "string")
        return next({
            type: action
        });

    return next(action);
};

const configureStore = () => {
    const middleware = [
        sagaMiddleware,
        logMiddleware,
        stringMiddleware
    ];

    const store = createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware(...middleware)
        )
    );
    sagaMiddleware.run(rootSaga);

    return store;
};

export default configureStore;