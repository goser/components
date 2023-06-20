"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLocalStoredReducer = void 0;
var react_1 = require("react");
var useLocalStoredReducer = function (storageName, reducer, initialState) {
    var load = (0, react_1.useCallback)(function () {
        var data = window.localStorage.getItem(storageName);
        return data !== null ? JSON.parse(data) : null;
    }, [storageName]);
    var save = (0, react_1.useCallback)(function (value) {
        window.localStorage.setItem(storageName, JSON.stringify(value));
    }, [storageName]);
    var reducerWithSave = (0, react_1.useCallback)(function (state, action) {
        state = reducer(state, action);
        save(state);
        return state;
    }, [reducer, save]);
    var initializer = (0, react_1.useCallback)(function (state) {
        state = __assign(__assign({}, state), load());
        save(state);
        return state;
    }, [load, save]);
    return (0, react_1.useReducer)(reducerWithSave, initialState, initializer);
};
exports.useLocalStoredReducer = useLocalStoredReducer;
