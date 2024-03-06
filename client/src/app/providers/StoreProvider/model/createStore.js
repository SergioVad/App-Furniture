import { furnitureReducer } from '@/app/store/furniture';
import { usersReducer } from '@/app/store/users';
import { rtkApi } from '@/shared/api/rtkApi';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    users: usersReducer,
    furniture: furnitureReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
});

export function createStore() {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(rtkApi.middleware),
    });
}
