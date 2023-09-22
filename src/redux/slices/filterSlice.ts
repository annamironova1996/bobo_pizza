import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface ActivePopupElem {
    name: string;
    sort: string;
}

interface InitialStateElem {
    activeMenu: number;
    currentPage: number;
    activePopupItem: ActivePopupElem;
}

const initialState: InitialStateElem = {
    activeMenu: 0,
    currentPage: 1,
    activePopupItem: {
        name: 'популярности',
        sort: 'rating',
    },
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setActiveMenu(state, action: PayloadAction<number>) {
            state.activeMenu = action.payload;
        },
        setActivePopupItem(state, action: PayloadAction<ActivePopupElem>) {
            state.activePopupItem = action.payload;
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        },
        setFilters(state, action) {
            state.currentPage = Number(action.payload.currentPage);
            // state.activeMenu= Number(action.payload.activeMenu);
            // state.activePopupItem = action.payload.activePopupItem
        },
    },
});

export const selectFilterSlice = (state: RootState) => state.filterSlice;

export const selectFilterSlicePopup = (state: RootState) =>
    state.filterSlice.activePopupItem;

export const { setActiveMenu, setActivePopupItem, setCurrentPage, setFilters } =
    filterSlice.actions;

export default filterSlice.reducer;
