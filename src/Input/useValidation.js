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
exports.useValidation = void 0;
var react_1 = require("react");
var hooks_1 = require("../hooks");
var useValidation = function (validationMapProvider) {
    var forceUpdate = (0, hooks_1.useForceUpdate)();
    var state = (0, react_1.useRef)();
    // TODO useCallback?
    var validateInternal = function (activate) {
        var _a;
        var validationMap = validationMapProvider();
        var fields = {};
        var isValidating = ((_a = state.current) === null || _a === void 0 ? void 0 : _a.isValidating) || activate;
        var allValid = true;
        Object.entries(validationMap).forEach(function (_a) {
            var key = _a[0], reasonMap = _a[1];
            var reasons = [];
            var fieldIsValid = true;
            Object.entries(reasonMap).forEach(function (_a) {
                var reason = _a[0], active = _a[1];
                if (active) {
                    reasons.push(reason);
                    fieldIsValid = false;
                }
            });
            fields[key] = {
                isValid: fieldIsValid || !isValidating,
                reasons: reasons,
            };
            allValid = (allValid && fieldIsValid) || !isValidating;
        });
        if (allValid) {
            isValidating = false;
        }
        state.current = {
            isValid: allValid,
            isValidating: isValidating,
            fields: fields
        };
    };
    if (!state.current) {
        validateInternal(false);
    }
    if (state.current.isValidating) {
        validateInternal(false);
    }
    var validate = function () {
        validateInternal(true);
        forceUpdate();
        return state.current.isValid;
    };
    var getValidationResult = function () {
        return __assign({}, state.current);
    };
    return __assign(__assign({}, state.current), { validate: validate, getValidationResult: getValidationResult });
};
exports.useValidation = useValidation;
