"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useForceUpdate = void 0;
var react_1 = require("react");
/**
 * Returns a function that triggers component update.
 */
function useForceUpdate() {
    var _a = (0, react_1.useState)(Object.create(null)), dispatch = _a[1];
    return (0, react_1.useCallback)(function () {
        dispatch(Object.create(null));
    }, [dispatch]);
}
exports.useForceUpdate = useForceUpdate;
