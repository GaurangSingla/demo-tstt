import {
  ADDITION,
  LOGIN,
  LOGOUT,
  SUBTRACTION,
  getApi,
} from '../actions/actiontype';

const initialState = {
  token: '',
  data: [],
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      // console.log(,action.payload)
      return {...state, token: action.payload};
    // case LOGOUT:
    //     return { ...state, data: state.data };
    case getApi:
      return {...state, data: action.cardData};
    default:
      return state;
  }
};
