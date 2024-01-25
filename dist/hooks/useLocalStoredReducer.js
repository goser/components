import { useCallback, useReducer } from 'react';
export const useLocalStoredReducer = (storageName, reducer, initialState) => {
    const load = useCallback(() => {
        const data = window.localStorage.getItem(storageName);
        return data !== null ? JSON.parse(data) : null;
    }, [storageName]);
    const save = useCallback((value) => {
        window.localStorage.setItem(storageName, JSON.stringify(value));
    }, [storageName]);
    const reducerWithSave = useCallback((state, action) => {
        state = reducer(state, action);
        save(state);
        return state;
    }, [reducer, save]);
    const initializer = useCallback((state) => {
        state = { ...state, ...load() };
        save(state);
        return state;
    }, [load, save]);
    return useReducer(reducerWithSave, initialState, initializer);
};
