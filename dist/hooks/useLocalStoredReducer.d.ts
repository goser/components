import { type Dispatch, type Reducer } from 'react';
export declare const useLocalStoredReducer: <S extends object, A extends any>(storageName: string, reducer: Reducer<S, A>, initialState: S) => [S, Dispatch<A>];
