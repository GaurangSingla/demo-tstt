import { ADDITION, LOGIN, LOGOUT, SUBTRACTION } from "../actions/actiontype";

const initialState = {
    token:''
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            // console.log(,action.payload)
            return { ...state, token: action.payload };
        // case LOGOUT:
        //     return { ...state, data: state.data };
        default:
            return state;
    }
}