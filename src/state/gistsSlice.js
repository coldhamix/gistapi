import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getGistForUser, getPublicGists} from "../services/gistService";
import {addToCache} from "./cacheSlice";

const initialState = {
    gists: [],
    loading: false,
    error: false,
    searchQuery: null,
};

export const loadGists = createAsyncThunk(
    'gists/fetch',
    async (username = '', {getState, dispatch}) => {

        const {cache} = getState();

        if (cache[username]) {
            return {
                searchQuery: username,
                gists: cache[username]
            };
        }

        const response = username ? await getGistForUser(username) : await getPublicGists();
        let gistsResponse = {
            gists: response.data,
            searchQuery: username,
        };

        dispatch(addToCache(gistsResponse))
        return gistsResponse;
    });

export const gistsSlice = createSlice({
    name: 'gists',
    initialState,
    reducers: {},
    extraReducers: {
        [loadGists.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [loadGists.fulfilled]: (state, action) => {
            const {gists, searchQuery} = action.payload;
            state.gists = gists;
            state.searchQuery = searchQuery;
            state.loading = false;
            state.error = null;
        },
        [loadGists.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
            state.searchQuery = '';
            state.gists = [];
        }
    }
});

export const gistsReducer = gistsSlice.reducer;
