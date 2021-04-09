import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getGistForUser, getPublicGists} from "../../services/gistService";
import {addToCache} from "./cache";

const initialState = {
    gists: [],
    loading: false,
    error: false,
    searchQuery: null,
};

/**
 * Async action for loading gists by query.
 * Uses caching for the subsequent calls for the same username.
 *
 * @Param username Username for which we are loading gists. When not specified - public gists will be loaded. *
 */
export const loadGists = createAsyncThunk(
    'gists/fetch',
    async (username = '', {getState, dispatch}) => {
        const {cache} = getState();
        if (cache[username]) {
            return makeGistPayload(cache[username], username);
        }

        const response = username ? await getGistForUser(username) : await getPublicGists();

        let gistsPayload = makeGistPayload(response.data, username);
        dispatch(addToCache(gistsPayload))

        return gistsPayload;
    }
);

/**
 * Gists slice of the store.
 *
 * This is the main part of this app.
 * This store contains:
 * - gists themselves
 * - current search query
 * - loading and error state
 *
 * This store reacts to the `loadGists` action and handles:
 * - pending state when loading starts
 * - fulfilled state when loading successfully completes
 * - rejected state when loading fails *
 */
export const gists = createSlice({
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

/**
 * Helper function to make gist payload for reducers
 * @param gists List of gists
 * @param searchQuery Corresponding search query
 * @return {{searchQuery, gists}}
 */
function makeGistPayload(gists, searchQuery) {
    return {gists, searchQuery};
}

export const gistsReducer = gists.reducer;
