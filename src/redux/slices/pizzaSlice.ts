import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

interface Pizza {
    id: number;
    description: string;
    dough: string[];
    img: string;
    price: number;
    sizes: string[];
    title: string;
}

interface InitialStatePizza {
    items: Pizza[];
    status: Status;
}

enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

export const fetchPizzas = createAsyncThunk<Pizza[]>(
    'pizzas/fetchPizzasById',

    async (params: any) => {
        //bag
        const { currentPage } = params;
        const { data } = await axios.get<Pizza[]>(
            `http://localhost:3005/pizza/?_page=${currentPage}&_limit=8`
        );

        return data;
    }
);

const initialState: InitialStatePizza = {
    items: [],
    status: Status.LOADING,
};

export const pizzaSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        setPizzas(state, action: PayloadAction<Pizza[]>) {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state, action) => {
            state.status = Status.LOADING;
            state.items = [];
        });
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = Status.SUCCESS;
        });
        builder.addCase(fetchPizzas.rejected, (state, action) => {
            state.status = Status.ERROR;
            state.items = [];
        });
    },
});

export const selectPizzaSliceItems = (state: RootState) =>
    state.pizzaSlice.items;

export const { setPizzas } = pizzaSlice.actions;

export default pizzaSlice.reducer;
