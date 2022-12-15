import {createStore} from 'redux';
import { mainReducer } from '../reducers/reducers';

export const store = createStore(mainReducer)