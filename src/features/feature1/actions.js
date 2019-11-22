import * as types from "./types";

export const add = ( product ) => ( {
    type: types.ADD,
    payload: {
        product
    },
} );

export const set = ( product) => ( {
    type: types.SET,
    payload: {
        product
    },
} );