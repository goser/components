import { Dispatch, Reducer } from 'react';
export declare const useLocalStoredReducer: <S extends object, A extends unknown>(storageName: string, reducer: Reducer<S, A>, initialState: S) => [S, Dispatch<A>];
