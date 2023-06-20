"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocaleContextProvider = exports.useLocale = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var DEFAULT_VALUE = 'en';
var CONTEXT = (0, react_1.createContext)(DEFAULT_VALUE);
var useLocale = function () { return (0, react_1.useContext)(CONTEXT); };
exports.useLocale = useLocale;
var LocaleContextProvider = function (_a) {
    var children = _a.children, locale = _a.locale;
    var Provider = CONTEXT.Provider;
    return (0, jsx_runtime_1.jsx)(Provider, { value: locale, children: children });
};
exports.LocaleContextProvider = LocaleContextProvider;
