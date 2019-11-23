import * as types from "./ationTypes";

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