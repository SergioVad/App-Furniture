import { createSlice } from '@reduxjs/toolkit';
import { furnitureService } from '../services/furniture.service';

const initialState = {
    entities: null,
    isLoading: true,
    error: null,
};

const furnitureSlice = createSlice({
    name: 'furniture',
    initialState,
    reducers: {
        furnitureRequested: (state) => {
            state.isLoading = true;
        },
        furnitureReceved: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        furnitureRequestFiled: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        furnitureAdd: (state, action) => {
            state.entities.push(action.payload);
            state.isLoading = false;
        },
        furnitureDelete: (state, action) => {
            state.entities = state.entities.filter(
                (c) => c._id !== action.payload,
            );
            state.isLoading = false;
        },
        furnSearch: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        furnitureEdit: (state, action) => {
            const index = state.entities.findIndex(
                (u) => u._id === action.payload._id,
            );
            state.entities[index] = action.payload;
            state.isLoading = false;
        },
    },
});

export const { reducer: furnitureReducer, actions } = furnitureSlice;
const {
    furnitureRequested,
    furnitureReceved,
    furnitureRequestFiled,
    furnitureAdd,
    furnitureEdit,
} = actions;

export const loadFurnitureListAdmin = () => async (dispatch) => {
    dispatch(furnitureRequested());
    try {
        const { data } = await furnitureService.get();
        await dispatch(furnitureReceved(data));
    } catch (error) {
        dispatch(furnitureRequestFiled(error.message));
    }
};
export const addFurniture = (payload) => async (dispatch) => {
    dispatch(furnitureRequested());
    try {
        const { data } = await furnitureService.create(payload);
        await dispatch(furnitureAdd(data));
    } catch (error) {
        dispatch(furnitureRequestFiled(error.message));
    }
};

export const editFurniture = (elem, id) => async (dispatch) => {
    dispatch(furnitureRequested());
    try {
        const { data } = await furnitureService.edit(elem, id);
        await dispatch(furnitureEdit(data));
        dispatch(loadFurnitureListAdmin());
    } catch (error) {
        dispatch(furnitureRequestFiled(error.message));
    }
};
export const getFurniture = () => (state) => {
    return state.furniture.entities;
};
