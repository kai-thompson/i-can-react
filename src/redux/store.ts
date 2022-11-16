import { configureStore, Middleware } from "@reduxjs/toolkit";

import logger from "redux-logger";

import rootReducer from "./rootReducer";

const middleware: Middleware[] = [];

if (import.meta.env.MODE === "development") {
  middleware.push(logger);
}

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
