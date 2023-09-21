import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
        setActiveMenu(state, action) {
            state.activeMenu = action.payload;
        },
        setActivePopupItem(state, action) {
            state.activePopupItem = action.payload;
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        },
        setFilters(state, action) {
            state.currentPage = Number(action.payload.currentPage);
            // state.activeMenu= Number(action.payload.activeMenu);
            // state.activePopupItem = action.payload.activePopupItem
        },
    },
});

export const selectFilterSlice = (state) => state.filterSlice;

export const selectFilterSlicePopup = (state) =>
    state.filterSlice.activePopupItem;

export const { setActiveMenu, setActivePopupItem, setCurrentPage, setFilters } =
    filterSlice.actions;

export default filterSlice.reducer;
