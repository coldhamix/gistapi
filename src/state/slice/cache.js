import {createSlice} from "@reduxjs/toolkit";

/**
 * Cache slice of the store.
 *
 * Is represented by a plain object, which keys are search queries and values are search results.
 * Public gists query is represented as an empty search query.
 *
 * {
 *     "": [ ... ], // public gists
 *     "first_user": [ ... ],
 *     "another_user": [ ... ],
 * }
 *
 * Actions:
 * - addToCache - puts gists to cache for a specific search query
 */
export const cache = createSlice({
    name: 'cache',
    initialState: {},
    reducers: {
        addToCache(state, action) {
            const {searchQuery, gists} = action.payload;
            state[searchQuery] = gists;
        }
    },
});

export const cacheReducer = cache.reducer;
export const {addToCache} = cache.actions;
