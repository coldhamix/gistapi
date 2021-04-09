import {configureStore} from "@reduxjs/toolkit";
import {gistsReducer} from "./gistsSlice";

export const store = configureStore({
    reducer: {
        gists: gistsReducer,
    },
});
