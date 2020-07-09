import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import allWordReducer from './allWordsReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import searchReducer from './searchReducer';
import wordReducer from './wordReducer';
import addWordReducer from './addWordReducer';

// let reducers = combineReducers({});

let reducers = combineReducers({
    allWord: allWordReducer,
    search: searchReducer,
    wordSettings: wordReducer,
    addWord: addWordReducer
});

type RootReducerType = typeof reducers;
export type stateType = ReturnType<RootReducerType>

type PropertieesType<T> = T extends {[key: string]: infer U} ? U : never

export type InferActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertieesType<T>>


let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));




export default store;