import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./AuthReducer";


const reducer = combineReducers({
    auth : authReducer
})
export const store =    configureStore(
   {reducer,devTools:true}
  );

  export type AppState = ReturnType<typeof store.getState>

  export type AppDispatch = typeof store.dispatch

