import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import searchReducer from './actions/searchReducer.js';
import historyReducer from "./actions/historyReducer.js";

const rootReducer = combineReducers(
    {
    searchReducer: searchReducer,
    historyReducer: historyReducer
}
)


const store = createStore(rootReducer,applyMiddleware(thunk))

export default store