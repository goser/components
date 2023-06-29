import {Dispatch, Reducer, useCallback, useReducer} from 'react';

export const useLocalStoredReducer = <S extends object, A extends any>(storageName: string, reducer: Reducer<S, A>, initialState: S): [S, Dispatch<A>] => {

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
    }, [reducer, save]);

    const initializer = useCallback((state: S) => {
        state = {...state, ...load()};
        save(state);
        return state;
    }, [load, save]);

    return useReducer(reducerWithSave, initialState, initializer);
};