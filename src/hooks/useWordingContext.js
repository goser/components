"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WordingContextProvider = exports.useWordingContext = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var useLocale_1 = require("./useLocale");
var DEFAULT = {};
var CONTEXT = (0, react_1.createContext)(DEFAULT);
var useWordingContext = function () { return (0, react_1.useContext)(CONTEXT); };
exports.useWordingContext = useWordingContext;
var WordingContextProvider = function (_a) {
    var children = _a.children, wordingResolver = _a.wordingResolver;
    var locale = (0, useLocale_1.useLocale)();
    var _b = (0, react_1.useState)(DEFAULT), value = _b[0], setValue = _b[1];
    (0, react_1.useEffect)(function () {
        var resultHandler = function (result) { return setValue(result.default); };
        var errorHandler = function (reason) {
            console.log("Failed to load wordings for locale ".concat(locale, ". Reason:"), reason);
            setValue(DEFAULT);
        };
        wordingResolver(locale)
            .then(resultHandler)
            .catch(errorHandler);
        return function () {
            resultHandler = function () { };
            errorHandler = function () { };
        };
    }, [locale, wordingResolver]);
    var Provider = CONTEXT.Provider;
    return (0, jsx_runtime_1.jsx)(Provider, { value: value, children: value !== DEFAULT && children });
};
exports.WordingContextProvider = WordingContextProvider;
