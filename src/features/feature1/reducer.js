import * as types from "./types";

const initialState = {
  products: []
};

export const updateStore = (state = initialState, {type, payload}) => {

    switch (type) {
        case types.ADD:
            return {
                ...state,
                ...payload
            };
        case types.SET:
            return {
                ...state,
                ...payload
            };
        default:
            return state;

    }
};

export default updateStore;