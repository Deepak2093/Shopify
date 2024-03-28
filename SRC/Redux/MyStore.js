import { combineReducers, configureStore } from '@reduxjs/toolkit'
import UserReducer from '../Redux/UserSilce'
import MyCartReducer from '../Redux/MyCart';
import  storage  from 'redux-persist/lib/storage';
import  persistReducer  from 'redux-persist/es/persistReducer';
let persistConfig={
  key:'root',
  storage
};

let rootReducer=combineReducers({
  users: UserReducer,
  cart:MyCartReducer
});
let persistedReducer=persistReducer(persistConfig,rootReducer);

export const mystore = configureStore({
  reducer:persistedReducer
});
