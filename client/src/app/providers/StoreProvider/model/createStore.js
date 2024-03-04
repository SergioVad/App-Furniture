import { furnitureReducer } from '@/app/store/furniture';
import { usersReducer } from '@/app/store/users';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    users: usersReducer,
    furniture: furnitureReducer,
});

export function createStore() {
    return configureStore({
        reducer: rootReducer,
    });
}
