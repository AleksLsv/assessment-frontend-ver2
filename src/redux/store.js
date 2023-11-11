import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import shipmentsReducer from "./shipments-reducer";
import thunkMiddleware from "redux-thunk";
import anyReducer from "./any-reducer";



let reducers = combineReducers({
    shipments: shipmentsReducer,
    another: anyReducer
});

const store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));

window.__store__ = store;


export default store;