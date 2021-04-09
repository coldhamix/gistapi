import {configureStore} from "@reduxjs/toolkit";
import {gistsReducer} from "./slice/gists";
import {cacheReducer} from "./slice/cache";

/**
 * We store:
 * - gists for the search page
 * - cache to save request data for later use
 */
export const store = configureStore({
    reducer: {
        gists: gistsReducer,
        cache: cacheReducer,
    },
});
