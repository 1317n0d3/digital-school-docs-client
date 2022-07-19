import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tabReducer from './reducers/TabSlice';
import authReducer from './reducers/AuthSlice';
import { appAPI } from "../services/AppService";

const rootReducer = combineReducers({
  tabReducer,
  authReducer,
  [appAPI.reducerPath]: appAPI.reducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(appAPI.middleware)
  })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];