import {
  ADDITION,
  LOGIN,
  LOGOUT,
  SUBTRACTION,
  getApi,
  facebookCred,
} from '../actions/actiontype';

const initialState = {
  credfb: {},
  token: '',
  data: [],
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {...state, token: action.payload};
    case getApi:
      return {...state, data: action.payload.cardData};
    case facebookCred:
      return {...state, credfb: action.payload.fbData};
    default:
      return state;
  }
};
