import {useEffect, useState} from "react";

/**
 * This custom hook is designed to be able to postpone `value` updates until `delay` milliseconds have elapsed
 * since the last time the `value` was updated.
 *
 * @param value Value to be debounced
 * @param delay Debounce delay in milliseconds
 */
export default function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(
        () => {
            const handler = setTimeout(() => setDebouncedValue(value), delay);
            return () => clearTimeout(handler);
        },
        [value, delay]
    );
    return debouncedValue;
}
