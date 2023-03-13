/**
 * Project: damirifa
 * File: index
 * Created by Pennycodes on 4/13/2022.
 * Copyright damirifa
 */
import {applyMiddleware, compose, createStore} from "redux";
import {persistReducer, persistStore} from "redux-persist";
import {createLogger} from "redux-logger";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import createSagaMiddleware from "redux-saga";
import rootReducers from "./reducers";
import sagas from "./sagas";

const createNoopStorage = () => {
    return {
        getItem(_key: string | number) {
            return Promise.resolve(null);
        },
        setItem(_key: string | number, value: string) {
            return Promise.resolve(value);
        },
        removeItem(_key: string | number) {
            return Promise.resolve();
        },
    };
};

const storage =
    typeof window !== "undefined"
        ? createWebStorage("local")
        : createNoopStorage();

const config = {
    key: "root",
    storage,
    keyPrefix: "damirifa-",
    blacklist: ["loading"],
    whitelist: ["auth"],
    debug: false, //to get useful logging
};
const middleware = [];
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);

if (process.env.NODE_ENV === "development") {
    middleware.push(createLogger());
}

const reducers = persistReducer(config, rootReducers);
const enhancers = [applyMiddleware(...middleware)];
const persistConfig: any = {enhancers};
const store = createStore(reducers, undefined, compose(...enhancers));

const persistor = persistStore(store, persistConfig, () => {
});
const configureStore = () => {
    return {persistor, store};
};

export {store};
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
sagaMiddleware.run(sagas);

export default configureStore;
