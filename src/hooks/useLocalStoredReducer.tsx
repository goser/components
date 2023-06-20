import { Reducer, ReducerState, useCallback, useReducer } from 'react';

export const useLocalStoredReducer = <R extends Reducer<any, any>, S extends ReducerState<R>>(storageName: string, reducer: R, initialState: S) => {

    const load = useCallback(() => {
        const data = window.localStorage.getItem(storageName);
        return data !== null ? JSON.parse(data) : null;
    }, [storageName]);

    const save = useCallback((value: any) => {
        window.localStorage.setItem(storageName, JSON.stringify(value));
    }, [storageName]);

    const reducerWithSave = useCallback((state: S, action: any) => {
        state = reducer(state, action);
        save(state);
        return state;
    }, [reducer, save])

    const initializer = useCallback((state: S) => {
        state = { ...state, ...load() };
        save(state);
        return state;
    }, [load, save]);

    return useReducer(reducerWithSave, initialState, initializer);
}