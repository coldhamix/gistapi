import {configureStore} from "@reduxjs/toolkit";
import {gistsReducer} from "./gistsSlice";
import {cacheReducer} from "./cacheSlice";

export const store = configureStore({
    reducer: {
        gists: gistsReducer,
        cache: cacheReducer,
    },
});
