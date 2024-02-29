import usersReducer from "../../../store/users";
import furnitureReducer from "../../../store/furniture";

const { combineReducers, configureStore } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
    users: usersReducer,
    furniture: furnitureReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
