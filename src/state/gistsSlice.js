import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getGistForUser, getPublicGists} from "../services/gistService";

const initialState = {
    gists: [],
    loading: false,
    error: false,
    searchQuery: null,
};

export const loadGists = createAsyncThunk('gists/fetch', async (username = null) => {
    const response = username ? await getGistForUser(username) : await getPublicGists();
    return {
        gists: response.data,
        searchQuery: username,
    };
});

export const gistsSlice = createSlice({
    name: 'gists',
    initialState,
    reducers: {},
    extraReducers: {
        [loadGists.pending]: (state) => {
            state.loading = true;
        },
        [loadGists.fulfilled]: (state, action) => {
            const {gists, searchQuery} = action.payload;
            state.gists = gists;
            state.searchQuery = searchQuery;
            state.loading = false;
        },
        [loadGists.rejected]: (state) => {
            state.loading = false;
            state.error = true;
            state.searchQuery = null;
            state.gists = [];
        }
    }
});

export const gistsReducer = gistsSlice.reducer;
