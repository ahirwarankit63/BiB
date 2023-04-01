import {createStore , combineReducers, applyMiddleware} from 'redux';

import thunk from 'redux-thunk'

import {composeWithDevTools} from 'redux-devtools-extension'
import { productReducer } from './Redux Folders/Reducers/productReducer';

const reducer  = combineReducers({
    products : productReducer
});

let initiaState = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initiaState,
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
