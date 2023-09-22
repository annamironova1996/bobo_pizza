import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface CartElem {
    id: number;
    description: string;
    dough: string[];
    img: string;
    price: number;
    sizes: string[];
    title: string;
    count: number;
}

interface InitialStateElem {
    totalPrice: number;
    items: CartElem[];
}

const initialState: InitialStateElem = {
    totalPrice: 0,
    items: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<CartElem>) {
            const findItem = state.items.find(
                (obj) => obj.id === action.payload.id
            );

            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1,
                });
            }
            state.totalPrice = state.items.reduce((sum, obj) => {
                return obj.price * obj.count + sum;
            }, 0);
        },

        minusItem(state, action: PayloadAction<number>) {
            const findItem = state.items.find(
                (obj) => obj.id === action.payload
            );

            if (findItem) {
                findItem.count--;
            }
        },
        removeItem(state, action: PayloadAction<number>) {
            state.items = state.items.filter(
                (obj) => obj.id !== action.payload
            );
        },
        clearItems(state) {
            state.items = [];
            state.totalPrice = 0;
        },
    },
});

export const selectCart = (state: RootState) => state.cartSlice;
export const selectCartItemId = (id: number) => (state: RootState) =>
    state.cartSlice.items.find((obj) => obj.id === id);

export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
