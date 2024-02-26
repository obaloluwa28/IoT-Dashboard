import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { buttonClickReducer } from "./Reducers/buttonClick";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { thunk } from "redux-thunk";
import { deviceDataReducer } from "./Reducers/deviceData";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["buttonclick"],
};

const rootReducer = combineReducers({
  buttonclick: buttonClickReducer,
  devicedata: deviceDataReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), thunk],
});

export const persistor = persistStore(Store);

export const resetStore = async () => {
  await persistor.purge(); // Clears the persisted state
};
