import { createStore, applyMiddleware, combineReducers } from "redux";
import * as reducers from "../features";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers( reducers );

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

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(stringMiddleware, logMiddleware)
    )
);

export default store;