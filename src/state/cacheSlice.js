import {createSlice} from "@reduxjs/toolkit";

export const cacheSlice = createSlice({
    name: 'cache',
    initialState: {},
    reducers: {
        addToCache(state, action) {
            const {searchQuery, gists} = action.payload;
            state[searchQuery] = gists;
        }
    },
});

export const cacheReducer = cacheSlice.reducer;
export const {addToCache} = cacheSlice.actions;
