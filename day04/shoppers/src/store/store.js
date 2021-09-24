// Have a store
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { cartReducer } from './reducers/cart-reducer';
import { productReducer } from './reducers/product-reducer';
import { userReducer } from './reducers/user-reducer';
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

// Takes a previous state and returns a new state

/* 
{
    products: {
        product: []
    },
    users: {
        user: {}
    }
} */
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
const store = createStore(combineReducers({products: productReducer, users: userReducer, cart: cartReducer}), {}, composedEnhancer)
export default store;