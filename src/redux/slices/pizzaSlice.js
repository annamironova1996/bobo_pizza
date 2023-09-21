import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk(
    'pizzas/fetchPizzasById',
    async ({ currentPage }) => {
        const { data } = await axios.get(
            `http://localhost:3005/pizza/?_page=${currentPage}&_limit=8`
        );
        console.log(data);
        return data;
    }
);

const initialState = {
    items: [],
    status: 'loading',
};

export const pizzaSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        setPizzas(state, action) {
            state.items = action.payload.data;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state, action) => {
            state.status = 'loading';
            state.items = [];
        });
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = 'success';
        });
        builder.addCase(fetchPizzas.rejected, (state, action) => {
            state.status = 'error';
            state.items = [];
        });
    },
});

export const selectPizzaSliceItems = (state) => state.pizzaSlice.items;

export const { setPizzas } = pizzaSlice.actions;

export default pizzaSlice.reducer;
