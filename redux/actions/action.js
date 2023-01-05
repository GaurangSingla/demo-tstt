import {LOGIN, getApi, facebookCred} from './actiontype';

export const login = payload => ({
  type: LOGIN,
  payload: payload,
});
export const api = cardData => ({
  type: getApi,
  payload: cardData,
});
export const fbcred = fbData => ({
  type: facebookCred,
  payload: {fbData},
});
