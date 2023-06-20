import { Reducer, ReducerState } from 'react';
export declare const useLocalStoredReducer: <R extends Reducer<any, any>, S extends ReducerState<R>>(storageName: string, reducer: R, initialState: S) => [S, import("react").Dispatch<any>];
