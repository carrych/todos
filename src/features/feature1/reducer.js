import * as actionTypes from "./ationTypes";

const initialState = {
  products: []
};

export const reducer = (state = initialState, {type, payload}) => {

    switch (type) {
        case actionTypes.ADD:
            return {
                ...state,
                ...payload
            };
        case actionTypes.SET:
            return {
                ...state,
                ...payload
            };
        default:
            return state;

    }
};

export default reducer;